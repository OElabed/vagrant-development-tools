package com.fix.agent.services;

import com.fix.agent.commands.common.Command;
import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.commands.StopModuleCommand;
import com.fix.common.domain.configs.ModuleConfig;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by OELABED on 13/10/2017.
 */
@Service
public class StopPackageService {

    public void stopAllModules(PackageConfig packageConfig){
        try {
            for (ModuleConfig moduleConfig:packageConfig.getModulesConfig()) {
                stopModule(moduleConfig, packageConfig.getBasePath());
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CommandEndedAbnormallyException e) {
            e.printStackTrace();
        }
    }

    private void stopModule(ModuleConfig moduleConfig, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command stopModuleCommand = new StopModuleCommand(moduleConfig,basePath);
        stopModuleCommand.execute();
    }
}
