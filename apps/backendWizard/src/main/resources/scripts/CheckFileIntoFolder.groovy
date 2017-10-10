package scripts

/**
 * Script Groovy that filter list file into folder
 * args:
 *  - 'fileName' file name
 *  - 'folderName' folder name
 *
 * Created by OELABED on 08/10/2017.
 */

def pattern = "${fileName}"
File dir = new File("${folderName}")

def filter = new FilenameFilter() {
    boolean accept(File path, String filename) {
        return filename.matches(pattern)
    }
}

def folderList = dir.list(filter)

if (folderList.size() > 0) {
    return true
}

return false