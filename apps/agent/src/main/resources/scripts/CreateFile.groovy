package scripts

/**
 * Script Groovy that create a folder
 * args:
 *  - 'path' folder path
 *  - 'fileName' file name
 *  - 'content' file content
 * Created by OELABED on 07/10/2017.
 */

File file = new File(path + fileName)
file.write content

return 0
