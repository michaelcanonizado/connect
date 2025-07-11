package com.michaelcanonizado.user_service.aop;

import com.michaelcanonizado.user_service.exceptions.UserAlreadyExistException;
import com.michaelcanonizado.user_service.exceptions.UserNotCreatedException;
import com.michaelcanonizado.user_service.exceptions.UserNotFoundException;
import com.michaelcanonizado.user_service.models.ErrorResponse;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotCreatedException.class)
    public ResponseEntity<ErrorResponse> handleUserNotCreated(UserNotCreatedException exception, HttpServletRequest request) {
        HttpStatus httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;

        ErrorResponse response = new ErrorResponse(
                httpStatus.value(),
                httpStatus.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                request.getMethod()
        );
        return ResponseEntity.status(httpStatus).body(response);
    }

    @ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<ErrorResponse> handleUserAlreadyExists(UserAlreadyExistException exception, HttpServletRequest request) {
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;

        ErrorResponse response = new ErrorResponse(
                httpStatus.value(),
                httpStatus.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                request.getMethod()
        );
        return ResponseEntity.status(httpStatus).body(response);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFound(UserNotFoundException exception, HttpServletRequest request) {
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;

        ErrorResponse response = new ErrorResponse(
                httpStatus.value(),
                httpStatus.getReasonPhrase(),
                exception.getMessage(),
                request.getRequestURI(),
                request.getMethod()
        );
        return ResponseEntity.status(httpStatus).body(response);
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleArguementTypeMismatch(MethodArgumentTypeMismatchException exception, HttpServletRequest request) {
        HttpStatus httpStatus = HttpStatus.BAD_REQUEST;

        ErrorResponse response = new ErrorResponse(
                httpStatus.value(),
                httpStatus.getReasonPhrase(),
                "Provided argument doesn't match expected type",
                request.getRequestURI(),
                request.getMethod()
        );

        return ResponseEntity.status(httpStatus).body(response);
    }
}
