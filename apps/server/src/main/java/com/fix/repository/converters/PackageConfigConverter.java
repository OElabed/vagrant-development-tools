package com.fix.repository.converters;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.utils.PackageConfigParserUtil;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

/**
 * Created by OELABED on 12/12/2017.
 */
@Converter
public class PackageConfigConverter implements AttributeConverter<PackageConfig, String> {

    @Override
    public String convertToDatabaseColumn(PackageConfig config) {
       return PackageConfigParserUtil.serializePackageConfigToYamlFile(config);
    }

    @Override
    public PackageConfig convertToEntityAttribute(String content) {
        return PackageConfigParserUtil.parsePackageConfigFromContentString(content);
    }
}
