package com.fix.agent.controller.api;

import com.fix.agent.exceptions.PackageInstallerException;
import com.fix.common.api.ResponseMessage;
import com.fix.common.api.exceptions.ResourceNotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@Slf4j
@RestControllerAdvice(basePackages = "com.fix")
public class RestExceptionHandler {

    @ExceptionHandler(value = {ResourceNotFoundException.class})
    public ResponseEntity<ResponseMessage> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        if (log.isDebugEnabled()) {
            log.debug("handling ResourceNotFoundException...");
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @ExceptionHandler(value = {PackageInstallerException.class})
    public ResponseEntity<ResponseMessage> handlePackageInstallerException(PackageInstallerException ex, WebRequest request) {
        if (log.isDebugEnabled()) {
            log.debug("handling PackageInstallerException...");
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
