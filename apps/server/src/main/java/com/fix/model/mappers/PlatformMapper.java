package com.fix.model.mappers;


import com.fix.common.domain.configs.Os;
import com.fix.common.domain.configs.Platform;
import com.fix.common.utils.OsUtils;
import com.netflix.appinfo.InstanceInfo;
import org.apache.commons.lang3.StringUtils;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PlatformMapper {

    default Platform mapToPlatform(InstanceInfo instanceInfo) {

        Platform platform = new Platform();
        platform.setName(StringUtils.substringAfter(instanceInfo.getInstanceId(), "--"));
        Os os = OsUtils.getOsFromName(StringUtils.substringBefore(instanceInfo.getInstanceId(), "--"));
        platform.setOs(os);

        return platform;
    }
}
