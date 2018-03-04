package com.fix.remote;

import com.fix.common.domain.configs.PackageConfig;
import com.fix.common.domain.configs.Platform;
import com.fix.common.domain.files.FileNode;
import com.fix.exceptions.RemoteClientException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;
import sun.net.www.content.text.PlainTextInputStream;

import java.util.Arrays;
import java.util.List;

@Service
public class PackageRemote {

    private static final String API_ROOT_URL = "/api/v1";

    private static final String FIND_ALL_PACKAGES_URL = API_ROOT_URL + "/package";

    private static final String FIND_PACKAGE_BY_ID_URL = API_ROOT_URL +"/package/{id}";

    private static final String CREATE_PACKAGE_URL = FIND_ALL_PACKAGES_URL;

    private static final String FIND_PACKAGE_CONTENT_URL = FIND_PACKAGE_BY_ID_URL + "/content";

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

        } catch (HttpStatusCodeException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        }  catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access to service"));
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

        } catch (HttpStatusCodeException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        }  catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access to service"));
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

            ResponseEntity<Void> response = restTemplate.exchange(uriComponents.toUri(), HttpMethod.POST, new HttpEntity<PackageConfig>(packageConfig), Void.class);
            String[] segments = response.getHeaders().getLocation().getPath().split("/");
            String packageId = segments[segments.length-1];

            return packageId;
        } catch (HttpStatusCodeException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        }  catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access to service"));
        } catch (Exception exception) {

            throw new RemoteClientException(platform.getName(), String.format("internal system error"));
        }
    }

    public FileNode findPackageContent(Platform platform, String id) throws RemoteClientException {
        String url = platformsRegistry.getPlatformInstanceUrl(platform);

        UriComponents uriComponents = UriComponentsBuilder
                .fromUriString(String.format("%s%s", url, FIND_PACKAGE_CONTENT_URL))
                .build()
                .expand(id)
                .encode();

        try {

            return restTemplate.getForObject(uriComponents.toUri(), FileNode.class);

        } catch (HttpStatusCodeException exception){

            throw new RemoteClientException(platform.getName(), String.format("%s status code: %s",
                    exception.getStatusCode(), exception.getStatusCode().getReasonPhrase()));
        }  catch (ResourceAccessException exception) {

            throw new RemoteClientException(platform.getName(), String.format("can't access to service"));
        } catch (Exception exception) {

            throw new RemoteClientException(platform.getName(), String.format("internal system error"));
        }

    }
}
