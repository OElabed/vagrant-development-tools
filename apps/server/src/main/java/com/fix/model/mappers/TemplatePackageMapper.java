package com.fix.model.mappers;

import com.fix.common.utils.PackageConfigParserUtil;
import com.fix.model.dto.TemplatePackage;
import com.fix.model.entities.TemplatePackageEntity;
import org.mapstruct.Mapper;

/**
 * Created by OELABED on 15/12/2017.
 */
@Mapper(componentModel = "spring")
public interface TemplatePackageMapper {

    default TemplatePackage mapToDto(TemplatePackageEntity entity) {
        TemplatePackage dto = new TemplatePackage();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setPackageConfig(PackageConfigParserUtil.parsePackageConfigFromContentString(entity.getContent()));

        return dto;
    }

    default TemplatePackageEntity mapToEntity(TemplatePackage dto) {
        TemplatePackageEntity entity = new TemplatePackageEntity();
        entity.setName(dto.getName());
        entity.setContent(PackageConfigParserUtil.serializePackageConfigToYamlFile(dto.getPackageConfig()));
        return entity;
    }
}
