package com.fix.model.entities;

import com.fix.repository.converters.PackageConfigConverter;
import lombok.Data;

import javax.persistence.*;


/**
 * Created by OELABED on 10/12/2017.
 */
@Data
@Entity
@Table(name="PACKAGE")
public class PackageConfigEntity {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "CONTENT")
    @Convert(converter = PackageConfigConverter.class)
    private String content;
}
