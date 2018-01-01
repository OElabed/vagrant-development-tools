package com.fix.api.auth;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.scheduling.annotation.Async;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2RefreshToken;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

/**
 * Created by OELABED on 25/12/2017.
 */
@Slf4j
@RestController
public class AccessController {

    @Autowired
    private TokenStore tokenStore;

    @PostMapping(value = "/oauth/revoke-token")
    @ResponseStatus(HttpStatus.OK)
    public void logout(Principal principal, HttpServletRequest request,
                       @RequestParam(value = "refreshToken", required = false) String refreshTokenValue) {
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null) {

            try {
                if (principal instanceof OAuth2Authentication) {

//                    SecurityUser user = (SecurityUser) ((OAuth2Authentication) principal)
//                            .getUserAuthentication().getPrincipal();
//                    activityLogWriter.write(Modules.LOGIN, LoginEvents.LOGOUT_COMPLETED,
//                            user);
                }
            }
            catch (Exception e) {
                log.error(e.getMessage(), e);
            }

            removeAccessToken(refreshTokenValue, authHeader);

        }
    }

    @Async
    private void removeAccessToken(String refreshTokenValue, String authHeader) {
        String tokenValue = authHeader.replace("Bearer", "").trim();
        OAuth2AccessToken accessToken = tokenStore.readAccessToken(tokenValue);
        tokenStore.removeAccessToken(accessToken);

        if (StringUtils.isNotBlank(refreshTokenValue)) {
            OAuth2RefreshToken refreshToken = tokenStore
                    .readRefreshToken(refreshTokenValue);
            tokenStore.removeRefreshToken(refreshToken);
        }
     }
}
