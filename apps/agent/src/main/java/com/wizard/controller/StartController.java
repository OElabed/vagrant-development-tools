package com.wizard.controller;

import com.wizard.domain.PackageConfig;
import com.wizard.services.PackageService;
import com.wizard.services.StartPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * Created by OELABED on 09/10/2017.
 */
@RestController
@RequestMapping("/start")
public class StartController {

    @Autowired
    private StartPackageService startPackageService;

    @Autowired
    private PackageService packageService;

    @RequestMapping(value = "/all/{packageId}", method = RequestMethod.GET)
    public ResponseEntity<?> startAllModules(@PathVariable("packageId") String packageId) throws IOException {

        PackageConfig packageConfig =  packageService.findByPackageId(packageId);

        if(packageConfig == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        startPackageService.startAllModules(packageConfig);

        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
