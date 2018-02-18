package com.fix.service;

import com.fix.common.api.exceptions.ResourceNotFoundException;
import com.fix.model.dto.TemplatePackage;
import com.fix.model.entities.TemplatePackageEntity;
import com.fix.model.mappers.TemplatePackageMapper;
import com.fix.repository.TemplatePackageRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.Assert;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by OELABED on 12/12/2017.
 */
@Slf4j
@Service
@Transactional
public class TemplatePackageService {

    @Autowired
    private TemplatePackageRepository templatePackageRepository;

    @Autowired
    private TemplatePackageMapper templatePackageMapper;

    public List<TemplatePackage> findAllTemplates() {

        log.debug("Get all templates data");

        List<TemplatePackageEntity> templatePackageEntityList= templatePackageRepository.findAll();

        List<TemplatePackage> templatePackageList = templatePackageEntityList.stream()
                .map(entity -> templatePackageMapper.mapToDto(entity))
                .collect(Collectors.toList());

        log.debug("[{}] templates found", templatePackageList.size());

        return templatePackageList;
    }

    public TemplatePackage findTemplatePackageById(Long id) throws ResourceNotFoundException {
        Assert.notNull(id, "template package id can not be null");

        log.debug("find template package by id @" + id);

        TemplatePackageEntity templatePackageEntity = templatePackageRepository.findOne(id);

        if (templatePackageEntity == null) {
            throw new ResourceNotFoundException(String.format("Template package with id @'%s' does not exists", id));
        }

        TemplatePackage templatePackage = templatePackageMapper.mapToDto(templatePackageEntity);

        return templatePackage;
    }

    public TemplatePackage saveTemplate(TemplatePackage template) {

        log.debug("save template @" + template);

        TemplatePackageEntity entity = templatePackageMapper.mapToEntity(template);

        TemplatePackageEntity saved = templatePackageRepository.save(entity);

        log.debug("saved template is @" + saved);

        return templatePackageMapper.mapToDto(saved);
    }
}
