package scripts

/**
 * Script Groovy that wget file
 * args:
 *  - 'source' file
 *  - 'target' folder target
 *
 * Created by OELABED on 08/10/2017.
 */

def command = "wget ${source} -P ${target}"
def proc = command.execute()
proc.waitFor()

return  0