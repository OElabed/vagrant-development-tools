package com.wizard.controller;

import com.wizard.services.InstallPackageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * Created by OELABED on 08/10/2017.
 */
@RestController
@RequestMapping("/install")
public class InstallController {

    @Autowired
    private InstallPackageService installPackageService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<?> all() throws IOException {

        installPackageService.installAllPackage();

        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
