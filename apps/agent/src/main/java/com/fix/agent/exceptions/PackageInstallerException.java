package com.fix.agent.exceptions;

public class PackageInstallerException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    public PackageInstallerException(String message, Throwable cause) {
        super(String.format("Package installer problem : %s", message), cause);
    }
}
