package com.fix.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

/**
 * Created by oelabed on 2016-11-03.
 */
@Data
@Entity
@Table(name="AUTHORITY")
public class Authority implements GrantedAuthority {

    @JsonIgnore
    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @Column(name="NAME")
    private String name;

    @Override
    public String getAuthority() {
        return this.name;
    }

}
