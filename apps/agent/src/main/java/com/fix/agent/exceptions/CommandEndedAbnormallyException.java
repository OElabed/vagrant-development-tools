package com.fix.agent.exceptions;

/**
 * Created by OELABED on 08/10/2017.
 */
public class CommandEndedAbnormallyException extends Exception {

	private static final long serialVersionUID = 1L;

	private static final String EXCEPTION_FORMAT= "%s command ended abnormally : %s.";

	public CommandEndedAbnormallyException(String commandName, String description, Throwable cause) {
		super(String.format(EXCEPTION_FORMAT, commandName, description), cause);
	}

}
