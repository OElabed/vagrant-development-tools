package com.fix.remote;

import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.PlatformNotFoundException;
import com.fix.exceptions.PlatformRegistryNotFoundException;
import com.fix.model.mappers.PlatformMapper;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.shared.Application;
import com.netflix.eureka.EurekaServerContextHolder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PlatformsRegistry {

    private static final String APPLICATION_NAME = "FIX-AGENT";

    @Autowired
    private PlatformMapper platformMapper;

    public List<Platform> getAllPlatforms(){

        return this.getAllInstances().stream()
                .map(instance -> this.platformMapper.mapToPlatform(instance))
                .collect(Collectors.toList());
    }

    public InstanceInfo getPlatformInstanceInfo(Platform platform){
        String instanceId = platformMapper.mapToInstanceIntoId(platform);

        Optional<InstanceInfo> instanceInfo = this.getAllInstances().stream()
                .filter(instance -> instance.getInstanceId().equals(instanceId))
                .findFirst();
        if(!instanceInfo.isPresent()) throw new PlatformNotFoundException(platform.getName());

        return instanceInfo.get();

    }

    private List<InstanceInfo> getAllInstances() throws PlatformRegistryNotFoundException{

        Optional<Application> application = EurekaServerContextHolder
                .getInstance().getServerContext().getRegistry().getApplications().getRegisteredApplications().stream()
                .filter(app -> app.getName().equals(APPLICATION_NAME)).findFirst();

        if(!application.isPresent()) throw new PlatformRegistryNotFoundException(APPLICATION_NAME);

        return application.get().getInstances();
    }
}
