package scripts

/**
 * Script Groovy that list file into folder
 * args:
 *  - 'folderName' folder name
 *
 * Created by OELABED on 08/10/2017.
 */

File dir = new File("${folderName}")
return dir.list()
