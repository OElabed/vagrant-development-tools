package com.fix.repository;

import com.fix.model.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by oelabed on 2016-10-15.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername( String username );
}

