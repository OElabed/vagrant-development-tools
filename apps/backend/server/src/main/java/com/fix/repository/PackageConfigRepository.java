package com.fix.repository;

import com.fix.model.entities.PackageConfigEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by OELABED on 15/12/2017.
 */
public interface PackageConfigRepository extends JpaRepository<PackageConfigEntity, Long> {
}
