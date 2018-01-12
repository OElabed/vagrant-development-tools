package scripts

/**
 * Script Groovy that run script
 * args:
 *  - 'command' command file to start
 *  - 'tailFolder' tail folder for module
 *  - 'scriptFile' shell file
 * Created by OELABED on 11/10/2017.
 */

static String checksum( String input ) {
    def digest = java.security.MessageDigest.getInstance("SHA-256")
    digest.update( input.bytes )
    new BigInteger(1,digest.digest()).toString(16).padLeft(32, '0')
}

def commandFileContent = "sh ${command} > ${tailFolder}/${scriptFile}.log & echo \$! > ${tailFolder}/${scriptFile}.pid"

def lunchedCommand = tailFolder + "/" + ".tmp" + "/" + "lunchedCommand-"+ checksum(commandFileContent) +".sh"
File file = new File(lunchedCommand)

if( !file.exists() ) {
    file.write commandFileContent
}

def proc = "sh ${lunchedCommand}".execute()

return 0