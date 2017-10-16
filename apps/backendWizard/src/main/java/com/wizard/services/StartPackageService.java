package com.wizard.services;

import com.wizard.commands.StartModuleCommand;
import com.wizard.commands.common.Command;
import com.wizard.domain.ModuleConfig;
import com.wizard.domain.PackageConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by OELABED on 10/10/2017.
 */
@Service
public class StartPackageService {

    public void startAllModules(PackageConfig packageConfig){
        try {
            for (ModuleConfig moduleConfig:packageConfig.getModules()) {
                startModule(moduleConfig, packageConfig.getPackageDefinition().getBasePath());
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CommandEndedAbnormallyException e) {
            e.printStackTrace();
        }
    }

    private void startModule(ModuleConfig moduleConfig, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command<ModuleConfig> startModuleCommand = new StartModuleCommand(moduleConfig,basePath);
        startModuleCommand.execute();
    }

}
