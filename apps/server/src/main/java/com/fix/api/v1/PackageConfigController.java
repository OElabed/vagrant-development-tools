package com.fix.api.v1;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.exceptions.InvalidRequestException;
import com.fix.service.PackageConfigService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

/**
 * Created by OELABED on 17/12/2017.
 */
@RestController
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class PackageConfigController {

    private static final Logger log = LoggerFactory.getLogger(PackageConfigController.class);

    @Autowired
    private PackageConfigService packageConfigService;

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
