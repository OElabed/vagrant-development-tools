package com.fix.model.mappers;


import com.fix.common.domain.configs.Os;
import com.fix.common.domain.configs.Platform;
import com.fix.common.utils.OsUtils;
import com.netflix.appinfo.InstanceInfo;
import org.apache.commons.lang3.StringUtils;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PlatformMapper {

    static final String SEPARATOR_INFO = "--";

    default Platform mapToPlatform(InstanceInfo instanceInfo) {

        Platform platform = new Platform();
        platform.setName(StringUtils.substringAfter(instanceInfo.getInstanceId(), SEPARATOR_INFO));
        Os os = OsUtils.getOsFromName(StringUtils.substringBefore(instanceInfo.getInstanceId(), SEPARATOR_INFO));
        platform.setOs(os);

        return platform;
    }

    default String mapToInstanceIntoId(Platform platform){
        StringBuilder instanceId = new StringBuilder();
        return instanceId.append(OsUtils.getOsName(platform.getOs()))
                .append(SEPARATOR_INFO)
                .append(platform.getName())
                .toString();
    }
}
