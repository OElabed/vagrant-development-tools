package com.fix.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

/**
 * Created by OELABED on 25/12/2017.
 */
@Configuration
@EnableResourceServer
public class OAuth2ResourceServerConfig extends ResourceServerConfigurerAdapter {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
                .antMatcher("/api/**")
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**")
                .permitAll()
                    .antMatchers("/**/api-docs/**").permitAll()
                    .antMatchers("/**/swagger-resources/**").permitAll()
                    .antMatchers("/**/swagger-ui.html*").permitAll()
                    .antMatchers("/**/redoc/index.html*").permitAll()
                    .antMatchers("/**/redoc/redoc.min.js*").permitAll()
                    .anyRequest().authenticated()

                .and()
                .csrf()
                   // .disable()
                   .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
        ;

    }

}
