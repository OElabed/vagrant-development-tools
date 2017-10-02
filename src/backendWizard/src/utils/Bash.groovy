package utils

/**
 * Created by OELABED on 02/10/2017.
 */
class Bash {

    static void launch(String cmd){
        launch(cmd, null)
    }

    static void launch(String cmd, String condition){

        cmd = cmd as String

        // create a process for the shell
        ProcessBuilder pb = new ProcessBuilder("bash", "-c", cmd)
        pb.redirectErrorStream(true) // use this to capture messages sent to stderr
        Process shell = pb.start()
        shell.getOutputStream().close()
        InputStream shellIn = shell.getInputStream() // this captures the output from the command

        // at this point you can process the output issued by the command
        // for instance, this reads the output and writes it to System.out:
        char character
        def line = ""
        while ((character = shellIn.read()) != -1){

            line +=  character
            if(character == '\n') {
                //print line
                if(line.contains(condition)){
                    // close the stream
                    try {
                        shellIn.close()
                        pb = null
                        shell = null
                        break
                    } catch (IOException ignoreMe) {}
                } else {
                    line = ""
                }
            }
        }

    }
}
