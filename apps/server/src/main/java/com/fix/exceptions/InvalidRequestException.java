package com.fix.exceptions;

import org.springframework.validation.BindingResult;

/**
 * Created by OELABED on 12/12/2017.
 */
public class InvalidRequestException extends RuntimeException {

    private BindingResult errors;

    public InvalidRequestException(BindingResult errors) {
        this.errors = errors;
    }

    public BindingResult getErrors() {
        return errors;
    }

}
