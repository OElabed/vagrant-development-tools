/**
 * Created by OELABED on 01/10/2017.
 */


import exceptions.AbnormalExitException
import exceptions.ToolNotFoundException
import utils.Bash
import utils.CheckEnv

class Application {

    private static final List<String> tools = [ 'git', 'unzip'] as String[]

    void execute(){
        try { checkToolsExists() } catch (ToolNotFoundException exp){ println "${exp.message}"}
        launchCommand()

    }

    private void checkToolsExists() throws ToolNotFoundException {
        tools.eachWithIndex { toolName, index ->
            if ( CheckEnv.whichTool(toolName) !=0 ) throw new ToolNotFoundException(toolName + " not Found")
        }
    }

    private void launchCommand() {
        String command = "./run.sh"
        Bash.launch(command, "running successfully 3")

    }

}
