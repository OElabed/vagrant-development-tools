package scripts

/**
 * Script Groovy that read file
 * args:
 *  -'fileName' file name
 *
 * Created by OELABED on 08/10/2017.
 */

String fileContents = new File(filePath).text

return fileContents