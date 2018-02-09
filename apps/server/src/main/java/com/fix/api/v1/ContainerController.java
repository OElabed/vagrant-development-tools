package com.fix.api.v1;

import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.service.ContainerService;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@Api(value = "ContainerController", description = "Container restful resource with rest controller", tags = "Custom UserController")
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class ContainerController {

    @Autowired
    private ContainerService containerService;

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/container")
    public ResponseEntity<List<Platform>> getAllContainers() {

        log.debug("Get all platform data");

        List<Platform> platformList = containerService.findAll();

        log.debug("[{}] platforms found", platformList.size());

        return new ResponseEntity<List<Platform>>(platformList, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/container/{id}")
    public ResponseEntity<Platform> getPlatfomById(@PathVariable("id") Long id) {

        log.debug("get platform data @{}", id);

        List<Platform> retrivedPlatforms = containerService.findById(id);

        if(retrivedPlatforms.isEmpty()){
            log.debug("Platform with id {} does not exists", id);
            throw new ResourceNotFoundException(id);
        }

        log.debug("Platform with id {} found => {}",id, retrivedPlatforms.get(0));

        return new ResponseEntity<Platform>(retrivedPlatforms.get(0), HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/container")
    public ResponseEntity<Platform> getPlatfomByName(@RequestParam("name") String name) {

        log.debug("get platform data with name @ {}", name);

        Platform platform = containerService.findByName(name);

        if(platform == null){
            log.debug("Platform with name {} does not exists", name);
            throw new ResourceNotFoundException(String.format("Resource with name %s does not exist", name));
        }

        log.debug("Platform with name {} found => {}", name, platform);

        return new ResponseEntity<Platform>(platform, HttpStatus.OK);
    }
}
