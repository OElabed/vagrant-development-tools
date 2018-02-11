package com.fix.service;

import com.fix.exceptions.ResourceNotFoundException;
import com.fix.model.dto.TemplatePackage;
import com.fix.model.entities.TemplatePackageEntity;
import com.fix.model.mappers.TemplatePackageMapper;
import com.fix.repository.TemplatePackageRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

/**
 * Created by OELABED on 12/12/2017.
 */
@Service
@Transactional
public class TemplatePackageService {

    private static final Logger LOGGER = LoggerFactory.getLogger(TemplatePackageService.class);

    @Autowired
    private TemplatePackageRepository templatePackageRepository;

    @Autowired
    private TemplatePackageMapper templatePackageMapper;

    public TemplatePackage findTemplatePackageById(Long id) {
        Assert.notNull(id, "template package id can not be null");

        LOGGER.debug("find template package by id @" + id);

        TemplatePackageEntity templatePackageEntity = templatePackageRepository.findOne(id);

        if (templatePackageEntity == null) {
            throw new ResourceNotFoundException(String.format("Template package with id @'%s' does not exists", id));
        }

        TemplatePackage templatePackage = templatePackageMapper.mapToDto(templatePackageEntity);

        return templatePackage;
    }

    public TemplatePackage saveTemplate(TemplatePackage template) {

        LOGGER.debug("save template @" + template);

        TemplatePackageEntity entity = templatePackageMapper.mapToEntity(template);

        TemplatePackageEntity saved = templatePackageRepository.save(entity);

        LOGGER.debug("saved template is @" + saved);

        return templatePackageMapper.mapToDto(saved);
    }
}
