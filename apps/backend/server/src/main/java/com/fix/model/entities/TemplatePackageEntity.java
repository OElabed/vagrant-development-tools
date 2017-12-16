package com.fix.model.entities;

import lombok.Data;

import javax.persistence.*;

/**
 * Created by OELABED on 10/12/2017.
 */
@Data
@Entity
@Table(name = "DATA_PACKAGE_TEMPLATE")
public class TemplatePackageEntity {

    @Id
    @Column(name = "ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "PACKAGE_ID", unique = true, nullable = false, insertable = true, updatable = true)
    private PackageConfigEntity packageConfig;


}
