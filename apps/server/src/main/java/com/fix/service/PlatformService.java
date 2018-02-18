package com.fix.service;

import com.fix.common.domain.configs.Os;
import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.remote.PlatformsRegistry;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@Transactional
public class PlatformService {

    @Autowired
    private PlatformsRegistry platformsRegistry;

    public Platform findByName(String name) throws ResourceNotFoundException {

        log.debug("get platform data @{}", name);

        Optional<Platform> result = this.platformsRegistry.getAllPlatforms().stream()
                .filter(platform -> platform.getName().equals(name))
                .findFirst();

        if(!result.isPresent()) throw new ResourceNotFoundException(String.format("Platform with name @'%s' does not exists", name));

        log.debug("Platform with name {} found => {}",result.get().getName(), result.get());

        return result.get();
    }

    public Platform findByOs(Os os) throws ResourceNotFoundException {

        Optional<Platform> result = this.platformsRegistry.getAllPlatforms().stream()
                .filter(platform -> platform.getName().equals(os))
                .findFirst();

        if(!result.isPresent()) throw new ResourceNotFoundException(String.format("Platform with os type @'%s' does not exists", os));

        return result.get();
    }

    public List<Platform> findAll() {

        log.debug("Get all platform data");

        List<Platform> platformList =this.platformsRegistry.getAllPlatforms();

        log.debug("[{}] platforms found", platformList.size());

        return platformList;
    }

}
