package scripts

import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths

/**
 * Script Groovy that unzip archive
 * args:
 *  - 'source' zip file
 *  - 'target' folder to be unzip
 *
 * Created by OELABED on 08/10/2017.
 */

Path source = Paths.get(source)
Path target = Paths.get(target)
Files.copy(source, target)

return  0