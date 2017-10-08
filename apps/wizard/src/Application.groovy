/**
 * Created by OELABED on 01/10/2017.
 */
import exceptions.ToolNotFoundException
import utils.Bash
import utils.ToolEnv

class Application {

    def tools = [ 'git', 'unzip'] as String[]

    void execute(){
        try { checkToolsExists() } catch (ToolNotFoundException exp){ println "${exp.message}"}
        launchCommand()
    }

    private void checkToolsExists() throws ToolNotFoundException {
        tools.eachWithIndex { toolName, index ->
            if ( ToolEnv.whichTool(toolName) !=0 ) throw new ToolNotFoundException(toolName + " not Found")
        }
    }

    private void launchCommand() {
        Bash.launch("./run.sh", "running successfully 3")
    }

}
