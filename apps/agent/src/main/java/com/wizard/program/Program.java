package com.wizard.program;

import com.wizard.utils.TailInputStream;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * Created by OELABED on 09/10/2017.
 */
public class Program {
    public static void main(String[] args) throws IOException {
        TailInputStream tailIn = new TailInputStream(new File("D:\\PROJECTs\\taaaaa\\Toto\\Toto\\test.log"));
        InputStreamReader readerIn = new InputStreamReader(tailIn);
        BufferedReader in = new BufferedReader(readerIn);

        String line = null;
        while ((line = in.readLine()) != null) {
            System.out.println(line);
        }
    }
}
