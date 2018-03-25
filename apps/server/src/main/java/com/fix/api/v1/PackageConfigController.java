package com.fix.api.v1;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.PackageConfigYaml;
import com.fix.common.domain.configs.Platform;
import com.fix.common.domain.files.FileNode;
import com.fix.exceptions.InvalidRequestException;
import com.fix.common.api.exceptions.ResourceNotFoundException;
import com.fix.exceptions.RemoteClientException;
import com.fix.service.PackageConfigService;
import com.fix.service.PlatformService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.net.URI;
import java.util.List;

/**
 * Created by OELABED on 17/12/2017.
 */
@RestController
@Api(value = "PackageConfigController", description = "Package restful resource with rest controller", tags = "Custom PackageConfigController")
@RequestMapping( value = "/api/v1", produces = MediaType.APPLICATION_JSON_VALUE )
public class PackageConfigController {

    @Autowired
    private PackageConfigService packageConfigService;

    @Autowired
    private PlatformService platformService;

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/platform/{platformId}/package")
    public ResponseEntity<List<PackageConfig>> getAllPackages(@PathVariable("platformId") String platformId)
            throws ResourceNotFoundException {

        Platform platform = platformService.findByName(platformId);

        List<PackageConfig> packageConfigList = packageConfigService.findAllPackagesByPlatform(platform);

        return new ResponseEntity<>(packageConfigList, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/platform/{platformId}/package/{packageId}")
    public ResponseEntity<PackageConfig> getPackage(@PathVariable("platformId") String platformId,
                                                    @PathVariable("packageId") String packageId)
            throws ResourceNotFoundException {

        Platform platform = platformService.findByName(platformId);

        PackageConfig packageConfig = packageConfigService.findPackageByIdByPlatform(platform, packageId);

        return new ResponseEntity<>(packageConfig, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('write')")
    @PostMapping(value = "/platform/{platformId}/package")
    public ResponseEntity<Void> createPackage(@RequestBody @Valid PackageConfig packageConfig,
                                              @PathVariable("platformId") String platformId,
                                              HttpServletRequest request,
                                              BindingResult errResult)
            throws ResourceNotFoundException,
            InvalidRequestException {

        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        Platform platform = platformService.findByName(platformId);

        PackageConfig saved = packageConfigService.createPackage(platform, packageConfig);


        URI locationHeader = ServletUriComponentsBuilder
                .fromContextPath(request)
                .path("/api/v1/platform/{platformId}/package/{packageId}")
                .buildAndExpand(platform.getName(), saved.getId())
                .toUri();

        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(locationHeader);

        return new ResponseEntity<>(headers, HttpStatus.CREATED);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @PostMapping(value = "/platform/{platformId}/package/marshal")
    public ResponseEntity<PackageConfig> marshal(@RequestBody @Valid PackageConfigYaml packageConfigYaml,
                                                 @PathVariable("platformId") String platformId,
                                                 BindingResult errResult)
            throws ResourceNotFoundException,
            InvalidRequestException {

        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        platformService.findByName(platformId);

        PackageConfig packageConfig = packageConfigService.marshall(packageConfigYaml);

        return new ResponseEntity<>(packageConfig, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('write')")
    @PostMapping(value = "/platform/{platformId}/package/unmarshal")
    public ResponseEntity<PackageConfigYaml> unmarshal(@RequestBody @Valid PackageConfig packageConfig,
                                                       @PathVariable("platformId") String platformId,
                                                       BindingResult errResult)
            throws ResourceNotFoundException,
            InvalidRequestException {


        if (errResult.hasErrors()) {
            throw new InvalidRequestException(errResult);
        }

        platformService.findByName(platformId);

        PackageConfigYaml packageConfigYaml = packageConfigService.unmarshall(packageConfig);

        return new ResponseEntity<>(packageConfigYaml, HttpStatus.OK);
    }

    @PreAuthorize("#oauth2.hasScope('read')")
    @GetMapping(value = "/platform/{platformId}/package/{packageId}/content")
    public ResponseEntity<FileNode> getPackageContent(@PathVariable("platformId") String platformId,
                                                      @PathVariable("packageId") String packageId)
            throws ResourceNotFoundException {

        Platform platform = platformService.findByName(platformId);

        FileNode filesTree = packageConfigService.findPackageContentByPackageConfigId(platform, packageId);

        return new ResponseEntity<>(filesTree, HttpStatus.OK);
    }

}
