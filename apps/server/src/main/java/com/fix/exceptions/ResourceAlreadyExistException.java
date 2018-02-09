package com.fix.exceptions;

public class ResourceAlreadyExistException extends RuntimeException {

    private static final long serialVersionUID = 1L;

    private Long id;

//    public ResourceAlreadyExistException(Long id) {
//        super(String.format("resource %s was not found", id));
//        this.id = id;
//    }

    public ResourceAlreadyExistException(String message) {
        super(message);
    }

    public Long getId() {
        return id;
    }
}
