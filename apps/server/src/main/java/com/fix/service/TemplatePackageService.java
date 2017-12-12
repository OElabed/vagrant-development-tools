package com.fix.service;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.utils.PackageConfigParserUtil;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.model.DTOUtils;
import com.fix.model.dto.TemplatePackage;
import com.fix.model.entities.TemplatePackageEntity;
import com.fix.repository.TemplatePackageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

/**
 * Created by OELABED on 12/12/2017.
 */
@Service
public class TemplatePackageService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TemplatePackageService.class);

    @Autowired
    private TemplatePackageRepository templatePackageRepository;

    public TemplatePackage findTemplatePackageById(Long id) {
        Assert.notNull(id, "template package id can not be null");

        LOGGER.debug("find template package by id @" + id);

        TemplatePackageEntity templatePackageEntity = templatePackageRepository.findOne(id);

        if (templatePackageEntity == null) {
            throw new ResourceNotFoundException(id);
        }

        TemplatePackage template = DTOUtils.map(templatePackageEntity, TemplatePackage.class);
        PackageConfig packageConfig = PackageConfigParserUtil
                .parsePackageConfigFromContentString(templatePackageEntity.getPackageConfig().getContent());
        packageConfig.setId(templatePackageEntity.getPackageConfig().getId());
        template.setPackageConfig(packageConfig);

        return template;
    }

    public TemplatePackage saveUser(TemplatePackage template) {
        Assert.notNull(template, " @@ Template package is null");

        LOGGER.debug("saving template package @" + template);

        TemplatePackageEntity templatePackageEntity = DTOUtils.map(template, TemplatePackageEntity.class);

        templatePackageEntity.getPackageConfig().setContent(PackageConfigParserUtil.serializePackageConfigToYamlFile(template.getPackageConfig()));

        TemplatePackageEntity saved = templatePackageRepository.save(templatePackageEntity);

        // TODO change this
       // return DTOUtils.map(saved, UserDetails.class);
        return  null;
    }

}
