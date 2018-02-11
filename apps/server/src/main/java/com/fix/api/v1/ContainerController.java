package com.fix.api.v1;

import com.fix.common.domain.configs.Platform;
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
    @GetMapping(value = "/container" , params = "name")
    public ResponseEntity<Platform> getPlatfomByName(@RequestParam("name") String name) {

        log.debug("get platform data @{}", name);

        Platform platform = containerService.findByName(name);

        log.debug("Platform with name {} found => {}",platform.getName(), platform);

        return new ResponseEntity<Platform>(platform, HttpStatus.OK);
    }
}
