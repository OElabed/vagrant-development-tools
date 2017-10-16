package com.wizard.exceptions;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommandEndedAbnormallyException extends Exception {

    public CommandEndedAbnormallyException(String commandName, int status) {
        super(commandName+ " command ended abnormally with status " + status + ".");
    }

    public CommandEndedAbnormallyException(String commandName, String cause) {
        super(commandName+ " command ended abnormally : "+ cause +".");
    }
}
