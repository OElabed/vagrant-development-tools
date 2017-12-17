package com.fix.api.v1;

import com.fix.exceptions.InvalidRequestException;
import com.fix.model.dto.ResponseMessage;
import com.fix.model.dto.TemplatePackage;
import com.fix.service.TemplatePackageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;

/**
 * Created by OELABED on 12/12/2017.
 */
@RestController
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
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

    @PostMapping(value = "/template")
    public ResponseEntity<ResponseMessage> createTemplate(@RequestBody @Valid TemplatePackage template, BindingResult errResult) {

        log.debug("create a new template");
        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        TemplatePackage saved = templatePackageService.saveTemplate(template);

        log.debug("saved template id is @" + saved.getId());

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/api/v1/template/{id}")
                .buildAndExpand(saved.getId())
                .toUri()
        );
        return new ResponseEntity<>(ResponseMessage.success("template.created"), headers, HttpStatus.CREATED);
    }

}
