package com.fix.service;

import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.ResourceAlreadyExistException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
@Transactional
public class ContainerService {


    private Map<String, Platform> containers;


    public ContainerService(){
        this.containers = new ConcurrentHashMap<String, Platform>();
    }


    public Platform findByName(String name) {
        return this.containers.get(name);
    }

    public List<Platform> findById(Long id) {
        List<Platform> retrivedPlatforms = this.containers.entrySet().stream()
                .map(entry -> entry.getValue())
                .filter(entry -> entry.getId().equals(id))
                .collect(Collectors.toList());
        return retrivedPlatforms;
    }

    public List<Platform> findAll() {
        return this.containers.entrySet().stream()
                .map(entry -> entry.getValue())
                .collect(Collectors.toList());
    }

    public void addContainer(Platform container){
        if(this.containers.get(container.getName()) != null ){
            throw new ResourceAlreadyExistException(String.format("Platform with name %s already exists", container.getName()));
        }
        this.containers.put(container.getName(),container);
    }

}
