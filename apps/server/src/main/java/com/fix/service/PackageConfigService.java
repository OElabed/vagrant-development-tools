package com.fix.service;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.common.utils.PackageConfigParserUtil;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.model.entities.PackageConfigEntity;
import com.fix.model.mappers.PackageConfigMapper;
import com.fix.repository.PackageConfigRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

/**
 * Created by OELABED on 17/12/2017.
 */
@Service
@Transactional
public class PackageConfigService {

    private static final Logger LOGGER = LoggerFactory.getLogger(PackageConfigService.class);

    @Autowired
    private PackageConfigRepository packageConfigRepository;

    @Autowired
    private PackageConfigMapper packageConfigMapper;

    public PackageConfig findPackageConfigById(Long id) {
        Assert.notNull(id, "package config id can not be null");

        LOGGER.debug("find package config by id @" + id);

        PackageConfigEntity entity = packageConfigRepository.findOne(id);

        if (entity == null) {
            throw new ResourceNotFoundException(id);
        }

        PackageConfig packageConfig= packageConfigMapper.mapToDto(entity);

        return packageConfig;
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

    public PackageConfig savePackageConfig(PackageConfig packageConfig) {

        LOGGER.debug("save package config @" + packageConfig);

        PackageConfigEntity packageEntity = packageConfigMapper.mapToEntity(packageConfig);

        PackageConfigEntity saved = packageConfigRepository.save(packageEntity);

        packageConfig.setId(saved.getId());

        LOGGER.debug("saved package config id is @" + packageConfig.getId());

        return packageConfig;

    }
}
