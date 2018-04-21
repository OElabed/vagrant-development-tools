package com.fix.config;

import com.fix.service.CustomUserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpMethod;
import org.springframework.jdbc.datasource.init.DataSourceInitializer;
import org.springframework.jdbc.datasource.init.DatabasePopulator;
import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerSecurityConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.JwtAccessTokenConverter;
import org.springframework.security.oauth2.provider.token.store.JwtTokenStore;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;

import javax.sql.DataSource;

@Configuration
public class OAuth2Configuration {

    @Configuration
    @EnableResourceServer
    protected static class ResourceServerConfiguration extends ResourceServerConfigurerAdapter {

        @Autowired
        private JwtAccessTokenConverter jwtAccessTokenConverter;

        @Override
        public void configure(final ResourceServerSecurityConfigurer resources) {
            resources
                    .tokenStore(new JwtTokenStore(jwtAccessTokenConverter));
        }

        @Override
        public void configure(final HttpSecurity http) throws Exception {
            http
                    .antMatcher("/api/**")
                    .authorizeRequests()
                    .antMatchers("/oauth/**").permitAll()
                    .antMatchers("/manages/**").permitAll()
                    //.antMatchers(AUTH_WHITELIST).permitAll()
                    .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                    .antMatchers(HttpMethod.GET, "/", "/*.html", "/**/*.css", "/**/*.js", "/**/*.png").permitAll()
                    .antMatchers("/**/api-docs/**").permitAll()
                    .antMatchers("/**/swagger-resources/**").permitAll()
                    .antMatchers("/**/swagger-ui.html*").permitAll()
                    .antMatchers("/**/redoc/index.html*").permitAll()
                    .antMatchers("/**/redoc/redoc.min.js*").permitAll()
                    .anyRequest().authenticated()
                    .and()

                    .csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())

                    .and()

                    .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        }
    }

    @Configuration
    @EnableAuthorizationServer
    protected static class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

        @Autowired
        private TokenStore tokenStore;

        @Autowired
        private AuthenticationManager authenticationManager;

        @Autowired
        private CustomUserDetailsService userDetailsService;

        @Value("classpath:schema.sql")
        private Resource schemaScript;

        @Value("classpath:data.sql")
        private Resource dataScript;

        @Autowired
        private DataSource dataSource;

        @Autowired
        private JwtAccessTokenConverter jwtAccessTokenConverter;

        @Bean
        public DataSourceInitializer dataSourceInitializer(final DataSource dataSource) {
            final DataSourceInitializer initializer = new DataSourceInitializer();
            initializer.setDataSource(dataSource);
            initializer.setDatabasePopulator(databasePopulator());
            return initializer;
        }

        private DatabasePopulator databasePopulator() {
            final ResourceDatabasePopulator populator = new ResourceDatabasePopulator();
            populator.addScript(schemaScript);
            populator.addScript(dataScript);
            return populator;
        }

        @Override
        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
            clients.jdbc(dataSource);
        }

        @Override
        public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
            endpoints
                    .tokenStore(tokenStore)
                    .authenticationManager(authenticationManager)
                    .userDetailsService(userDetailsService)
                    .accessTokenConverter(jwtAccessTokenConverter);
        }

        @Override
        public void configure(AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
            oauthServer
                    .tokenKeyAccess("permitAll()")
                    .checkTokenAccess("isAuthenticated()");
        }

    }

}
