package com.fix.repository;

import com.fix.model.entities.PackageConfigEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by OELABED on 16/12/2017.
 */
public interface PackageConfigRepository extends JpaRepository<PackageConfigEntity, Long> {
}
