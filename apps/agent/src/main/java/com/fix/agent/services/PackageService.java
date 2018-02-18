package com.fix.agent.services;

import com.fix.agent.repositories.PackageRepository;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by OELABED on 11/10/2017.
 */
@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    public PackageConfig findByPackageId(String folderId){
        return packageRepository.findByPackageId(folderId);
    }

    public List<PackageConfig> findAllPackages() {
        return packageRepository.findAllPackages();
    }
}
