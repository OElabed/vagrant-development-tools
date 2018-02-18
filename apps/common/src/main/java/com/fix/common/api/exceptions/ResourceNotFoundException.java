package com.fix.common.api.exceptions;

/**
 * Created by OELABED on 12/12/2017.
 */
public class ResourceNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;


    public ResourceNotFoundException(String message) {
        super(message);
    }

}