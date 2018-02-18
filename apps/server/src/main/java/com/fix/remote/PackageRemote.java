package com.fix.remote;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.Platform;
import com.fix.exceptions.RemoteClientException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Arrays;
import java.util.List;

@Service
public class PackageRemote {

    private static final String FIND_ALL_PACKAGES_URL = "/package";

    private static final String FIND_PACKAGE_BY_ID_URL = "/package/{id}";

    private static final String CREATE_PACKAGE_URL = FIND_ALL_PACKAGES_URL;

    @Autowired
    private PlatformsRegistry platformsRegistry;

    @Autowired
    private RestTemplate restTemplate;

    public List<PackageConfig> findAllPackage(Platform platform) throws RemoteClientException {
        String url = platformsRegistry.getPlatformInstanceUrl(platform);

        UriComponents uriComponents = UriComponentsBuilder
                .fromUriString(String.format("%s%s", url, FIND_ALL_PACKAGES_URL))
                .build()
                .encode();

        try{

            return Arrays.asList(restTemplate.getForObject(uriComponents.toUri(), PackageConfig[].class));

        } catch (HttpClientErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                        exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (HttpServerErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access this service"));
        } catch (Exception exception) {

            throw new RemoteClientException(platform.getName(), String.format("internal system error"));
        }
    }

    public PackageConfig findPackageConfigById(Platform platform, String id) throws RemoteClientException {
        String url = platformsRegistry.getPlatformInstanceUrl(platform);

        UriComponents uriComponents = UriComponentsBuilder
                .fromUriString(String.format("%s%s", url, FIND_PACKAGE_BY_ID_URL))
                .build()
                .expand(id)
                .encode();

        try {

            return restTemplate.getForObject(uriComponents.toUri(), PackageConfig.class);

        } catch (HttpClientErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (HttpServerErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access this service"));
        } catch (Exception exception) {

            throw new RemoteClientException(platform.getName(), String.format("internal system error"));
        }
    }

    public String installPackage(Platform platform, PackageConfig packageConfig) throws RemoteClientException {
        String url = platformsRegistry.getPlatformInstanceUrl(platform);

        UriComponents uriComponents = UriComponentsBuilder
                .fromUriString(String.format("%s%s", url, CREATE_PACKAGE_URL))
                .build()
                .encode();

        try {

            return restTemplate.postForObject(uriComponents.toUri(), packageConfig, String.class);
        } catch (HttpClientErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (HttpServerErrorException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        } catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access this service"));
        } catch (Exception exception) {

            throw new RemoteClientException(platform.getName(), String.format("internal system error"));
        }
    }
}
