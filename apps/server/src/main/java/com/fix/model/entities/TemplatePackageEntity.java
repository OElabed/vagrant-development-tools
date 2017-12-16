package com.fix.model.entities;

import javax.persistence.*;

/**
 * Created by OELABED on 10/12/2017.
 */
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public PackageConfigEntity getPackageConfig() {
        return packageConfig;
    }

    public void setPackageConfig(PackageConfigEntity packageConfig) {
        this.packageConfig = packageConfig;
    }


    public TemplatePackageEntity() {

    }


}
