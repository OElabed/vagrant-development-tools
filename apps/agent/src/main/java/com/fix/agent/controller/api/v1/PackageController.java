package com.fix.agent.controller.api.v1;

import com.fix.agent.services.PackageService;
import com.fix.common.domain.configs.PackageConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class PackageController {

    @Autowired
    private PackageService packageService;

    @GetMapping(value = "/package")
    public ResponseEntity<List<PackageConfig>> getAllInstalledPackage() {

        log.debug("Get all packages data");

        List<PackageConfig> packageList = packageService.findAllPackages();

        log.debug("[{}] pacakges found", packageList.size());

        return new ResponseEntity<>(packageList, HttpStatus.OK);

    }

    @GetMapping(value = "/package/{id}")
    public ResponseEntity<PackageConfig> getInstalledPackageById(@PathVariable("id") String packageId) {

        log.debug("get package data @{}", packageId);

        PackageConfig packageConfig = packageService.findByPackageId(packageId);

        return new ResponseEntity<>(packageConfig, HttpStatus.OK);

    }

}
