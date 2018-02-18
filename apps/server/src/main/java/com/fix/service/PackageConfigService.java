package com.fix.service;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.common.domain.configs.Platform;
import com.fix.common.utils.PackageConfigParserUtil;
import com.fix.common.api.exceptions.ResourceNotFoundException;
import com.fix.model.mappers.PackageConfigMapper;
import com.fix.remote.PackageRemote;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Created by OELABED on 17/12/2017.
 */
@Service
@Slf4j
@Transactional
public class PackageConfigService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PackageConfigService.class);

    @Autowired
    private PackageConfigMapper packageConfigMapper;

    @Autowired
    private PackageRemote packageRemote;

    public List<PackageConfig> findAllPackagesByPlatform(Platform platform) {

        log.debug("Get all packages config data");

        List<PackageConfig> packageConfigList = packageRemote.findAllPackage(platform);

        log.debug("[{}] packages found", packageConfigList.size());

        return packageConfigList;
    }

    public PackageConfig findPackageByIdByPlatform(Platform platform, String id) {

        log.debug("get package config data @" + id);

        Optional<PackageConfig> packageConfig = Optional.ofNullable(packageRemote.findPackageConfigById(platform,id));

        if(!packageConfig.isPresent()) throw new ResourceNotFoundException(String.format("Package with id @'%s' does not exists", id));

        log.debug("Package config with id " + id + " found => " + packageConfig.get());

        return packageConfig.get();
    }

    public PackageConfig createPackage(Platform platform, PackageConfig packageConfig){

        log.debug("create a new package config@" + packageConfig);
        String packageId = packageRemote.installPackage(platform, packageConfig);
        packageConfig.setId(packageId);

        log.debug("saved package config id is @" + packageId);

        return packageConfig;
    }

    public PackageConfig marshall(PackageConfigYaml yamlConfig) {

        log.debug("marshal config yaml file");

        PackageConfig packageConfig= PackageConfigParserUtil.parsePackageConfigFromContentString(yamlConfig.getContent());
        packageConfig.setId(yamlConfig.getId());

        return packageConfig;
    }

    public PackageConfigYaml unmarshall(PackageConfig config) {

        log.debug("umarshal package config");

        PackageConfigYaml configYaml= new PackageConfigYaml();
        configYaml.setContent(PackageConfigParserUtil.serializePackageConfigToYamlFile(config));
        configYaml.setId(config.getId());

        return configYaml;
    }

}
