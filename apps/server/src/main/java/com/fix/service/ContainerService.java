package com.fix.service;

import com.fix.common.domain.configs.Os;
import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.remote.PlatformsRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class ContainerService {

    @Autowired
    private PlatformsRegistry platformsRegistry;

    public Platform findByName(String name) {

        Optional<Platform> result = this.platformsRegistry.getAllPlatforms().stream()
                .filter(platform -> platform.getName().equals(name))
                .findFirst();

        if(!result.isPresent()) throw new ResourceNotFoundException(String.format("Platform with name @'%s' does not exists", name));

        return result.get();
    }

    public Platform findByOs(Os os) {

        Optional<Platform> result = this.platformsRegistry.getAllPlatforms().stream()
                .filter(platform -> platform.getName().equals(os))
                .findFirst();

        if(!result.isPresent()) throw new ResourceNotFoundException(String.format("Platform with os type @'%s' does not exists", os));

        return result.get();
    }

    public List<Platform> findAll() {

        return this.platformsRegistry.getAllPlatforms();
    }

}
