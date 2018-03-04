package com.fix.agent.utils;

import com.fix.common.domain.files.FileNode;
import com.fix.common.domain.files.FileType;

import java.io.File;
import java.util.ArrayList;

public class FileTreeUtil {

    public static FileNode collectContent(String path) {
        File folder = new File(path);
        return collectFileContent(folder);
    }

    private static FileNode collectFileContent(File dir) {
        FileNode node = new FileNode();
        node.setName(dir.getName());
        node.setSize(dir.length());
        if (dir.isDirectory()){
            node.setType(FileType.dir);
            node.setChildren(new ArrayList<>());

            File[] files = dir.listFiles();
            for (File file : files) {
                node.getChildren().add(collectFileContent(file));
            }
        } else {
            node.setType(FileType.file);
        }
        return node;
    }
}
