package com.fix.model.mappers;

import com.fix.model.dto.TemplatePackage;
import com.fix.model.entities.TemplatePackageEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

/**
 * Created by OELABED on 15/12/2017.
 */
@Mapper(componentModel = "spring", uses = {PackageConfigMapper.class})
public interface TemplatePackageMapper {

    @Mappings({
             @Mapping(target = "id"),
             @Mapping(target = "name"),
             @Mapping(target = "packageConfig")
    })
    TemplatePackage mapToDto(TemplatePackageEntity entity);


    @Mappings({
            @Mapping(target = "id"),
            @Mapping(target = "name"),
            @Mapping(target = "packageConfig")
    })
    TemplatePackageEntity mapToEntity(TemplatePackage dto);
}
