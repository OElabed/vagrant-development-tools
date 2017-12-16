package com.fix.api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import com.fix.model.dto.ResponseMessage;

/**
 * Called when an exception occurs during request processing. Transforms
 * exception message into JSON format.
 */
@RestControllerAdvice
public class RestExceptionHandler {

	private static final Logger log = LoggerFactory.getLogger(RestExceptionHandler.class);

	@ExceptionHandler(value = { Exception.class, RuntimeException.class })
	public ResponseEntity<ResponseMessage> handleGenericException(Exception ex, WebRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("handling exception...");
		}
		return new ResponseEntity<>(new ResponseMessage(ResponseMessage.Type.danger, ex.getMessage()),
				HttpStatus.BAD_REQUEST);
	}

}
