package com.fix.api.packageconfig;

import com.fix.model.dto.TemplatePackage;
import com.fix.service.TemplatePackageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by OELABED on 12/12/2017.
 */
@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class TemplatePackageController {

    private static final Logger log = LoggerFactory.getLogger(TemplatePackageController.class);

    @Autowired
    private TemplatePackageService templatePackageService;

    @GetMapping(value = "/template/{id}")
    public ResponseEntity<TemplatePackage> getTemplate(@PathVariable("id") Long id) {

        log.debug("get user data @" + id);

        TemplatePackage template = templatePackageService.findTemplatePackageById(id);

        return new ResponseEntity<>(template, HttpStatus.OK);
    }
}
