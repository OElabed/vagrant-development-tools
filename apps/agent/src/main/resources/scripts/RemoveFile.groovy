package scripts

/**
 * Script Groovy that remove file
 * args:
 *  - 'path' folder path
 *  - 'fileName' file name
 * Created by OELABED on 07/10/2017.
 */

File file = new File(path + fileName)
boolean fileSuccessfullyDeleted = file.delete()

if (!fileSuccessfullyDeleted) {
    return -1
}

return 0

