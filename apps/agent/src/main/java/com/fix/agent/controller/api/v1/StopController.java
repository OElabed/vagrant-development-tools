package com.fix.agent.controller.api.v1;

import com.fix.agent.services.PackageService;
import com.fix.agent.services.StopPackageService;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

/**
 * Created by OELABED on 12/10/2017.
 */
@RestController
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class StopController {

    @Autowired
    private StopPackageService stopPackageService;

    @Autowired
    private PackageService packageService;

    @RequestMapping(value = "/stop/all/{packageId}", method = RequestMethod.GET)
    public ResponseEntity<?> stopAllModules(@PathVariable("packageId") String packageId) throws IOException {

        PackageConfig packageConfig =  packageService.findByPackageId(packageId);

        if(packageConfig == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        stopPackageService.stopAllModules(packageConfig);

        return new ResponseEntity<String>(HttpStatus.OK);
    }
}
