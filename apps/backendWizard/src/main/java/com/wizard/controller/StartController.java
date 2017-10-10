package com.wizard.controller;

import com.wizard.domain.FileConfig;
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

    @RequestMapping(value = "/all/{folderId}", method = RequestMethod.GET)
    public ResponseEntity<?> all(@PathVariable("folderId") String folderId) throws IOException {

        FileConfig fileConfig =  packageService.findByFolderId(folderId);

        if(fileConfig == null){
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        startPackageService.startAll(folderId);

        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
