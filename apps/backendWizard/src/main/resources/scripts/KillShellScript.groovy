package scripts

/**
 * Script Groovy that kill running script
 * args:
 *  - 'tailFolder' folder that contain log file
 *  - 'scriptFile' script running name
 * Created by OELABED on 11/10/2017.
 */

String pid = new File(tailFolder+"/"+scriptFile+".pid").text

def command = "kill -9 ${pid}"
def proc = command.execute()
proc.waitFor()

return 0
