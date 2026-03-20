package com.julio.cifra_api.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@Getter
@Setter
@AllArgsConstructor
public class RestErrorMessage {
    private final String message;
    private final HttpStatus status;
}
