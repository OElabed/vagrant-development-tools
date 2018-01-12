package scripts

/**
 * Script Groovy that unzip archive
 * args:
 *  - 'source' zip file
 *  - 'target' folder to be unzip
 *
 * Created by OELABED on 08/10/2017.
 */

def command = "unzip ${source} -d ${target}"
def proc = command.execute()
proc.waitFor()

return  0