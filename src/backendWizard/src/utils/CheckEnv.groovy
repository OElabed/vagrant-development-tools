package utils

/**
 * Created by OELABED on 01/10/2017.
 */
class CheckEnv {

    static whichTool(String name) {
        def command = "which ${name}"

        Process process = command.execute()
        process.waitFor()

        return process.exitValue()
    }
}
