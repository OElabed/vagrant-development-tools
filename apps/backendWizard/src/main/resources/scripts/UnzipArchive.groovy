package scripts

/**
 * Created by OELABED on 08/10/2017.
 */

def command = "unzip ${source} -d ${target}"
def proc = command.execute()
proc.waitFor()

return  0