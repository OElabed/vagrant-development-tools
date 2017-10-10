package com.wizard.services;

import com.wizard.domain.FileConfig;
import com.wizard.domain.PackageConfig;
import com.wizard.repositories.PackageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 * Created by OELABED on 11/10/2017.
 */
@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    public FileConfig findByFolderId(String folderId){
        return packageRepository.findByFolderId(folderId);
    }
}
