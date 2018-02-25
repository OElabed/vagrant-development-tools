package scripts

/**
 * Script Groovy that remove file
 * args:
 *  - 'path' folder path
 * Created by OELABED on 07/10/2017.
 */

File folder = new File(path)
boolean folderSuccessfullyDeleted = folder.deleteDir()

if (!folderSuccessfullyDeleted) {
    return -1
}

return 0

