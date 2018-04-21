package com.fix.exceptions;

public class RemoteClientException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private String platformName;

    public RemoteClientException(String platformName, String msg) {
        super(String.format("Platform '%s' request return api error: %s", platformName, msg));
        this.platformName = platformName;
    }

    public RemoteClientException(String platformName, String msg, Throwable cause) {
        super(String.format("Platform '%s' request return api error: %s", platformName, msg), cause);
        this.platformName = platformName;
    }

    public RemoteClientException(Throwable cause) {
        super( cause);
    }

    public String getPlatformName() {
        return this.platformName;
    }
}
