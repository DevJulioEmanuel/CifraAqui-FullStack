package com.julio.cifra_api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public RestErrorMessage handlerResourceNotFound(ResourceNotFoundException e) {
        return new RestErrorMessage(e.getMessage(), HttpStatus.NOT_FOUND);
    }
}
