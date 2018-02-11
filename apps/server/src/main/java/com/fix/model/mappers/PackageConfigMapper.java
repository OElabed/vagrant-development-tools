package com.fix.model.mappers;

import org.mapstruct.Mapper;

/**
 * Created by OELABED on 15/12/2017.
 */
@Mapper(componentModel = "spring")
public interface PackageConfigMapper {

//    default PackageConfig mapToDto(PackageConfigEntity entity) {
//
//        PackageConfig dto = PackageConfigParserUtil.parsePackageConfigFromContentString(entity.getContent());
//        dto.setId(entity.getId());
//
//        return dto;
//    }
//
//    default PackageConfigEntity mapToEntity(PackageConfig dto) {
//
//        PackageConfigEntity entity = new PackageConfigEntity();
//
//        entity.setContent(PackageConfigParserUtil.serializePackageConfigToYamlFile(dto));
//        entity.setId(dto.getId());
//
//        return entity;
//    }

}
