package com.fix.config;

import com.google.common.base.Predicates;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RestController;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.OAuthBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.*;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by OELABED on 08/12/2017.
 */
@Configuration
@EnableSwagger2
public class SwaggerConfig{

    public static final String AUTHORIZATION = "Authorization";
    private static final String securitySchemaOAuth2 = "basic";
    private static final String authorizationTokenURL = "http://localhost:8080";

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

    private String sortDescription = "Pagination's sort item by field";

    @Value("${swagger.defaultValue.page:0}")
    private String pageValue;

    @Value("${swagger.defaultValue.size:20}")
    private String sizeValue;

    @Value("${swagger.defaultValue.sort:id,desc}")
    private String sortValue;

    @Bean
    public Docket api() {
        ModelRef intModel = new ModelRef("integer");


        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(
                        Predicates.or(
                                //RequestHandlerSelectors.withClassAnnotation(Repository.class),
                                RequestHandlerSelectors.withClassAnnotation(RestController.class)
                                //RequestHandlerSelectors.basePackage("org.springframework.security.oauth2.provider.endpoint"),
                                //Predicates.not(RequestHandlerSelectors.basePackage("org.springframework.boot"))
                        )

                )
                .paths(PathSelectors.any())
                .build()

                .apiInfo(apiInfoBuilder())

                .securitySchemes(Collections.singletonList(securitySchema()));
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


    private List<GrantType> grantTypes() {


        List<GrantType> grantTypes = new ArrayList<>();
        grantTypes.add(new ResourceOwnerPasswordCredentialsGrant(authorizationTokenURL+"/oauth/token"));
        return grantTypes;


    }

    private List<AuthorizationScope> scopes() {
        List<AuthorizationScope> list = new ArrayList<>();
        list.add(new AuthorizationScope(AuthorizationConfig.SCOPE_READ, AuthorizationConfig.SCOPE_READ_DESC));
        list.add(new AuthorizationScope(AuthorizationConfig.SCOPE_WRITE, AuthorizationConfig.SCOPE_READ_DESC));
        return list;
    }

    private OAuth securitySchema() {
        return new OAuthBuilder()
                .name("OAuth2")
                .scopes(scopes())
                .grantTypes(grantTypes())
                .build();
    }

}

