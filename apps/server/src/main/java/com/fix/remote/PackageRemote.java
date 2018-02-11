package com.fix.remote;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.Platform;
import com.netflix.appinfo.InstanceInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class PackageRemote {

    @Autowired
    private PlatformsRegistry platformsRegistry;

    @Autowired
    private RestTemplate restTemplate;

    public List<PackageConfig> getAllPackage(Platform platform){
        InstanceInfo intanceInfo = platformsRegistry.getPlatformInstanceInfo(platform);

        String url = "http://"+ intanceInfo.getIPAddr() + ":" + intanceInfo.getPort();

        return Arrays.asList(restTemplate.getForObject(url +"/package", PackageConfig[].class));
    }
}
