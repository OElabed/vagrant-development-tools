package com.fix.api;

import com.fix.common.api.ResponseMessage;
import com.fix.common.api.exceptions.ResourceNotFoundException;
import com.fix.exceptions.InvalidRequestException;
import com.fix.exceptions.RemoteClientException;
import com.fix.exceptions.ResourceAlreadyExistException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.List;

/**
 * Called when an exception occurs during request processing. Transforms
 * exception message into JSON format.
 */
@Slf4j
@EnableWebMvc
@RestControllerAdvice(basePackages = "com.fix")
public class RestExceptionHandler {

	@Autowired
	private MessageSource messageSource;

	@ExceptionHandler(value = { Exception.class, RuntimeException.class })
	public ResponseEntity<ResponseMessage> handleGenericException(Exception ex, WebRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("handling exception...");
		}
		return new ResponseEntity<>(new ResponseMessage(ResponseMessage.Type.danger, ex.getMessage()),
				HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = {ResourceNotFoundException.class})
	public ResponseEntity<ResponseMessage> handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("handling ResourceNotFoundException...");
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(value = {ResourceAlreadyExistException.class})
	public ResponseEntity<ResponseMessage> handleResourceAlreadyExistException(ResourceAlreadyExistException ex, WebRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("handling ResourceAlreadyExistException...");
		}
		return new ResponseEntity<>(HttpStatus.CONFLICT);
	}

	@ExceptionHandler(value = {InvalidRequestException.class})
	public ResponseEntity<ResponseMessage> handleInvalidRequestException(InvalidRequestException ex, WebRequest req) {
		if (log.isDebugEnabled()) {
			log.debug("handling InvalidRequestException...");
		}

		ResponseMessage alert = new ResponseMessage(
				ResponseMessage.Type.danger,
				ApiErrors.INVALID_REQUEST,
				messageSource.getMessage(ApiErrors.INVALID_REQUEST, new String[]{}, null));

		BindingResult result = ex.getErrors();

		List<FieldError> fieldErrors = result.getFieldErrors();

		if (!fieldErrors.isEmpty()) {
			fieldErrors.stream().forEach(e -> {
				alert.addError(e.getField(), e.getCode(), e.getDefaultMessage());
			});
		}

		return new ResponseEntity<>(alert, HttpStatus.UNPROCESSABLE_ENTITY);
	}

	@ExceptionHandler(value = {RemoteClientException.class})
	public ResponseEntity<ResponseMessage> handleRemoteClientException(RemoteClientException ex, WebRequest request) {
		if (log.isDebugEnabled()) {
			log.debug("handling RemoteClientException...");
		}
		return new ResponseEntity<>(new ResponseMessage(ResponseMessage.Type.danger, ex.getMessage()),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
