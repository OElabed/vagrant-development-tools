package com.fix.agent.controller.api.v1;

import com.fix.agent.services.InstallPackageService;
import com.fix.common.domain.configs.PackageConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
@Slf4j
@RestController
@RequestMapping("/install")
public class InstallController {

    @Autowired
    private InstallPackageService installPackageService;

    @PostMapping(value = "/all")
    public ResponseEntity<?> all() throws IOException {

//        installPackageService.installAllPackage();

        return new ResponseEntity<String>(HttpStatus.OK);
    }


    @PostMapping(value = "/all")
    public ResponseEntity<Void> installAllPackage(@RequestBody @Valid PackageConfig packageConfig, HttpServletRequest request) {

        log.debug("Install a new package @" + packageConfig);

        installPackageService.installAllPackage(packageConfig);

//        log.debug("saved package config id is @" + saved.getId());
//        URI locationHeader = ServletUriComponentsBuilder
//                .fromContextPath(request)
//                .path("/api/package/{id}")
//                .buildAndExpand(saved.getId())
//                .toUri();

        HttpHeaders headers = new HttpHeaders();
//        headers.setLocation(locationHeader);

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }
}
