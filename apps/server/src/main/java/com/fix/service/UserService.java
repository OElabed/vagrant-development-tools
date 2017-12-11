package com.fix.service;

import com.fix.model.entities.User;

import java.util.List;

/**
 * Created by oelabed on 2016-10-15.
 */
public interface UserService {
    void resetCredentials();
    User findById(Long id);
    User findByUsername(String username);
    List<User> findAll ();
}
