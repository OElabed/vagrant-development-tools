package com.fix.api.v1;

import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.service.PlatformService;
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
@Api(value = "PlatformController", description = "Platform restful resource with rest controller", tags = "PlatformController")
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class PlatformController {

    @Autowired
    private PlatformService platformService;

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/platform")
    public ResponseEntity<List<Platform>> getAllContainers() {

        List<Platform> platformList = platformService.findAll();

        return new ResponseEntity<>(platformList, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/platform" , params = "name")
    public ResponseEntity<Platform> getPlatfomByName(@RequestParam("name") String name) throws ResourceNotFoundException {

        Platform platform = platformService.findByName(name);

        return new ResponseEntity<>(platform, HttpStatus.OK);
    }
}
