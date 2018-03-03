package scripts

import org.apache.commons.io.FileUtils
/**
 * Script Groovy that unzip archive
 * args:
 *  - 'source' zip file
 *  - 'target' folder to be unzip
 *
 * Created by OELABED on 08/10/2017.
 */

File sourceDir = new File(source)
File targetDir = new File(target)

FileUtils.copyDirectory(sourceDir, targetDir)

return  0
