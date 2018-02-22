package com.fix.agent.services;

import com.fix.agent.installers.PackageInstaller;
import com.fix.agent.repositories.PackageRepository;
import com.fix.common.api.exceptions.ResourceNotFoundException;
import com.fix.common.domain.configs.PackageConfig;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Created by OELABED on 11/10/2017.
 */
@Slf4j
@Service
public class PackageService {

    @Autowired
    private PackageRepository packageRepository;

    @Autowired
    private PackageInstaller packageInstaller;

    public PackageConfig findByPackageId(String folderId){

        log.debug("get package data @{}", folderId);

        Optional<PackageConfig> packageConfig = Optional.ofNullable(packageRepository.findByPackageId(folderId));

        if(!packageConfig.isPresent()) throw new ResourceNotFoundException(String.format("Package with id @'%s' does not exists", folderId));

        log.debug("Package with id {} found => {}",packageConfig.get().getName(), packageConfig.get());

        return packageConfig.get();
    }

    public List<PackageConfig> findAllPackages() {

        log.debug("Get all packages config data");

        List<PackageConfig> packageConfigList = packageRepository.findAllPackages();

        log.debug("[{}] packages found", packageConfigList.size());

        return packageConfigList;

    }

    public String createPackage(PackageConfig packageConfig) {

        log.debug("Install a new package @{}", packageConfig);

        String packageId = packageInstaller.installPackage(packageConfig);

        log.debug("Package successfully installed with id @'{}'", packageId);

        return packageId;

    }
}
