package com.fix.exceptions;

public class PlatformNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String name;

    public PlatformNotFoundException(String name) {
        super(String.format("Platform with name %s was not found or not already registred", name));
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
