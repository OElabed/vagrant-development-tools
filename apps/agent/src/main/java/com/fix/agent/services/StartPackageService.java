package com.fix.agent.services;

import com.fix.agent.exceptions.CommandEndedAbnormallyException;
import com.fix.agent.commands.StartModuleCommand;
import com.fix.agent.commands.common.Command;
import com.fix.common.domain.configs.ModuleConfig;
import com.fix.common.domain.configs.PackageConfig;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by OELABED on 10/10/2017.
 */
@Service
public class StartPackageService {

    public void startAllModules(PackageConfig packageConfig){
        try {
            for (ModuleConfig moduleConfig:packageConfig.getModulesConfig()) {
                startModule(moduleConfig, packageConfig.getBasePath());
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CommandEndedAbnormallyException e) {
            e.printStackTrace();
        }
    }

    private void startModule(ModuleConfig moduleConfig, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command startModuleCommand = new StartModuleCommand(moduleConfig,basePath);
        startModuleCommand.execute();
    }

}
