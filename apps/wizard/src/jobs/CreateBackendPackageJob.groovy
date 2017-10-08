package jobs

import exceptions.ToolNotFoundException

/**
 * Created by OELABED on 04/10/2017.
 */
class CreateBackendPackageJob implements Job {

    @Override
    void start() {
        try { checkToolsExists() } catch (ToolNotFoundException exp){ println "${exp.message}"}
        launchCommand()
    }

}
