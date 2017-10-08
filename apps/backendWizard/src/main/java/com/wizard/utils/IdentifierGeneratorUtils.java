package com.wizard.utils;

import java.util.UUID;

/**
 * Created by OELABED on 08/10/2017.
 */
public class IdentifierGeneratorUtils {

    public static String generateUUID() {
        UUID uuid = UUID.randomUUID();
        String randomUUIDString = uuid.toString();
        return randomUUIDString;
    }
}
