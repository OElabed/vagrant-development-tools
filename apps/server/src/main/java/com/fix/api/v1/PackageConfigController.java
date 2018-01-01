package com.fix.api.v1;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.exceptions.InvalidRequestException;
import com.fix.exceptions.ResourceNotFoundException;
import com.fix.service.PackageConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;

/**
 * Created by OELABED on 17/12/2017.
 */
@Slf4j
@RestController
@PreAuthorize("#oauth2.hasScope('ui')")
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class PackageConfigController {

    @Autowired
    private PackageConfigService packageConfigService;

    @GetMapping(value = "/package/{id}")
    public ResponseEntity<PackageConfig> getPackage(@PathVariable("id") Long id) {

        log.debug("get package config data @" + id);

        PackageConfig packageConfig = packageConfigService.findPackageConfigById(id);

        if (packageConfig == null) {
            log.debug("Package config with id " + id + " does not exists");
            throw new ResourceNotFoundException(id);
        }

        log.debug("Package config with id " + id + " found => " + packageConfig);

        return new ResponseEntity<>(packageConfig, HttpStatus.OK);
    }

    @PostMapping(value = "/package")
    public ResponseEntity<Void> createPackage(@RequestBody @Valid PackageConfig packageConfig, HttpServletRequest request) {

        log.debug("create a new package config@" + packageConfig);

        PackageConfig saved = packageConfigService.savePackageConfig(packageConfig);

        log.debug("saved package config id is @" + saved.getId());
        URI locationHeader = ServletUriComponentsBuilder
                .fromContextPath(request)
                .path("/api/package/{id}")
                .buildAndExpand(saved.getId())
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(locationHeader);

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @PostMapping(value = "/package/marshal")
    public ResponseEntity<PackageConfig> marshal(@RequestBody @Valid PackageConfigYaml packageConfigYaml, BindingResult errResult) {

        log.debug("marshal config yaml file");
        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        PackageConfig packageConfig = packageConfigService.marshall(packageConfigYaml);

        return new ResponseEntity<>(packageConfig, HttpStatus.OK);
    }


    @PostMapping(value = "/package/unmarshal")
    public ResponseEntity<PackageConfigYaml> unmarshal(@RequestBody @Valid PackageConfig packageConfig, BindingResult errResult) {

        log.debug("umarshal package config");
        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        PackageConfigYaml packageConfigYaml = packageConfigService.unmarshall(packageConfig);

        return new ResponseEntity<>(packageConfigYaml, HttpStatus.OK);
    }

}
