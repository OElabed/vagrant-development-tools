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

    // @Mappings({
    //         @Mapping(source = "id", target = "id"),
    //         @Mapping(source = "name", target = "name")
    // })
    TemplatePackage mapToDto(TemplatePackageEntity entity);
}
