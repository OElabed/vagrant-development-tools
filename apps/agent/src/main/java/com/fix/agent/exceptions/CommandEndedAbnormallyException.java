package com.fix.agent.exceptions;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommandEndedAbnormallyException extends Exception {

	private static final long serialVersionUID = 1L;

	public CommandEndedAbnormallyException(String commandName, int status) {
		super(commandName + " command ended abnormally with status " + status + ".");
	}

	public CommandEndedAbnormallyException(String commandName, String cause) {
		super(commandName + " command ended abnormally : " + cause + ".");
	}
}
