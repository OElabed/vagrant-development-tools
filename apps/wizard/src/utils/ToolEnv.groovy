package utils

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

/**
 * Created by OELABED on 01/10/2017.
 */
class ToolEnv {

    static whichTool(String name) {
        return Bash.launch("which ${name}")
    }

    static copyFromTo(String source, String target) {

        Path from = Paths.get(source)
        Path to = Paths.get(target)
        Files.copy(from, to)
    }

}
