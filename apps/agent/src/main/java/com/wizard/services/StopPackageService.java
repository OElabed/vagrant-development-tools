package com.wizard.services;

import com.wizard.commands.StopModuleCommand;
import com.wizard.commands.common.Command;
import com.wizard.domain.ModuleConfig;
import com.wizard.domain.PackageConfig;
import com.wizard.exceptions.CommandEndedAbnormallyException;
import org.springframework.stereotype.Service;

import java.io.IOException;

/**
 * Created by OELABED on 13/10/2017.
 */
@Service
public class StopPackageService {

    public void stopAllModules(PackageConfig packageConfig){
        try {
            for (ModuleConfig moduleConfig:packageConfig.getModules()) {
                stopModule(moduleConfig, packageConfig.getPackageDefinition().getBasePath());
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (CommandEndedAbnormallyException e) {
            e.printStackTrace();
        }
    }

    private void stopModule(ModuleConfig moduleConfig, String basePath) throws IOException, CommandEndedAbnormallyException {
        Command<ModuleConfig> stopModuleCommand = new StopModuleCommand(moduleConfig,basePath);
        stopModuleCommand.execute();
    }
}
