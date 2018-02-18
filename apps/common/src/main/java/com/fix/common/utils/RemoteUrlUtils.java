package com.fix.common.utils;

public class RemoteUrlUtils {

    private static final String URL_REMOTE_PATTERN = "http://{host}:{port}";

    private static final String URL_SEPARATOR = "/";


    public static String createHttpUrl(String host, int port){

        StringBuilder urlBuilder = new StringBuilder();

        return urlBuilder.append(
                URL_REMOTE_PATTERN
                        .replace("{host}", host)
                        .replace("{port}", String.valueOf(port)))
                .toString();

    }
}
