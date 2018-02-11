package com.fix.exceptions;

public class PlatformRegistryNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String name;

    public PlatformRegistryNotFoundException(String name) {
        super(String.format("Application platforms with name %s was not found", name));
        this.name = name;
    }

    public String getName() {
        return this.name;
    }
}
