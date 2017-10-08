package scripts

/**
 * Script Groovy that create a folder
 * args:
 *  - 'folderName' folder name
 * Created by OELABED on 07/10/2017.
 */

final File newDir = new File(folderName)

if (newDir.exists()) {
    newDir.deleteDir()
}

newDir.mkdirs()


return 0
