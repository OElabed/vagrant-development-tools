package com.fix.service;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.common.domain.configs.Platform;
import com.fix.common.utils.PackageConfigParserUtil;
import com.fix.model.mappers.PackageConfigMapper;
import com.fix.remote.PackageRemote;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by OELABED on 17/12/2017.
 */
@Service
@Transactional
public class PackageConfigService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PackageConfigService.class);

    @Autowired
    private PackageConfigMapper packageConfigMapper;

    @Autowired
    private PackageRemote packageRemote;

    public List<PackageConfig> getAllPackagesByPlatform(Platform platform){

        return packageRemote.getAllPackage(platform);
    }

    public PackageConfig marshall(PackageConfigYaml yamlConfig) {

        PackageConfig packageConfig= PackageConfigParserUtil.parsePackageConfigFromContentString(yamlConfig.getContent());
        packageConfig.setId(yamlConfig.getId());

        return packageConfig;
    }

    public PackageConfigYaml unmarshall(PackageConfig config) {

        PackageConfigYaml configYaml= new PackageConfigYaml();
        configYaml.setContent(PackageConfigParserUtil.serializePackageConfigToYamlFile(config));
        configYaml.setId(config.getId());

        return configYaml;
    }

}
