package com.fix.config;

import com.google.common.base.Predicates;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger.web.ApiKeyVehicle;
import springfox.documentation.swagger.web.SecurityConfiguration;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by OELABED on 08/12/2017.
 */
@Slf4j
@Configuration
@EnableSwagger2
public class SwaggerConfig{

    @Value("${server.port:0}")
    private int port;

    private static final String authorizationTokenURL = "/oauth/token";

    private static final String DEFAULT_REALM = "realm";

    private static final String SECURITY_SCHEME_OAUTH = "OAuth2";

//    @Autowired
//    private SwaggerOAuth2Client swaggerOAuth2Client;

    @Value("${server.context-path:}")
    private String contextPath;

    @Value("${swagger.apiInfo.title:}")
    private String title;

    @Value("${swagger.apiInfo.description:}")
    private String description;

    @Value("${swagger.apiInfo.version:}")
    private String version;

    @Value("${swagger.apiInfo.termOfServiceUrl:}")
    private String termOfServiceUrl;

    @Value("${swagger.apiInfo.contactUrl:}")
    private String contactUrl;

    @Value("${swagger.apiInfo.contactName:}")
    private String contactName;

    @Value("${swagger.apiInfo.contactEmail:}")
    private String contactEmail;

    @Value("${swagger.apiInfo.license:}")
    private String license;

    @Value("${swagger.apiInfo.licenseUrl:}")
    private String licenseUrl;

    @Value("${swagger.defaultKey.page:page}")
    private String pageKey;

    @Value("${swagger.defaultKey.size:size}")
    private String sizeKey;

    @Value("${swagger.defaultKey.sort:sort}")
    private String sortKey;

    @Value("${swagger.defaultValue.page:0}")
    private String pageValue;

    @Value("${swagger.defaultValue.size:20}")
    private String sizeValue;

    @Value("${swagger.defaultValue.sort:id,desc}")
    private String sortValue;

    @Bean
    public Docket api() {

        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(
                        Predicates.not(
                                Predicates.or(
                                        RequestHandlerSelectors.basePackage("org.springframework.boot")
                                        //RequestHandlerSelectors.basePackage("org.springframework.security.oauth2.provider.endpoint")
                                )
                        )
                )
//                .paths(PathSelectors.ant("/api/**"))
                .paths(PathSelectors.any())
                .build()
                .apiInfo(apiInfoBuilder())
                .securitySchemes(Collections.singletonList(oauth()));
    }

    @Bean
    public SecurityConfiguration securityInfo() {
        String clientId = "swagger-ui";
        String clientSecret = "secret";
        return new SecurityConfiguration(
                clientId,
                clientSecret,
                DEFAULT_REALM,
                clientId,
                "apiKey",
                ApiKeyVehicle.HEADER,
                "api_key",
                " "
        );
    }

    private ApiInfo apiInfoBuilder() {
        return new ApiInfoBuilder()
                .title(title)
                .description(description)
                .version(version)
                .termsOfServiceUrl(termOfServiceUrl)
                .contact(new Contact(contactName, contactUrl, contactEmail))
                .license(license)
                .licenseUrl(licenseUrl)
                .build();
    }

    private SecurityScheme oauth() {
        return new OAuthBuilder()
                .name(SECURITY_SCHEME_OAUTH)
                .scopes(scopes())
                .grantTypes(grantTypes())
                .build();
    }

    private List<AuthorizationScope> scopes() {
        return Arrays.asList(
                new AuthorizationScope(AuthorizationConfig.SCOPE_READ, AuthorizationConfig.SCOPE_READ_DESC),
                new AuthorizationScope(AuthorizationConfig.SCOPE_WRITE, AuthorizationConfig.SCOPE_WRITE_DESC)
        );
    }

    private List<GrantType> grantTypes() {
        return Collections.singletonList(new ResourceOwnerPasswordCredentialsGrant(getServerContext()));
    }

    private String getServerContext() {

        StringBuilder stringBuilder = new StringBuilder();
        try {
            stringBuilder
                    .append("http://")
                    .append(InetAddress.getLocalHost().getHostAddress())
                    .append(":")
                    .append(port)
                    .append(contextPath)
                    .append(authorizationTokenURL);
        } catch (UnknownHostException e) {
            log.error("Unknown Host");
        }

        return stringBuilder.toString();

    }
}

