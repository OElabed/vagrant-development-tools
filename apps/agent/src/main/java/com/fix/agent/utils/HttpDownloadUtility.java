package com.fix.agent.utils;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.file.Paths;

public class HttpDownloadUtility {

    private static final int BUFFER_SIZE = 4096;

    private static final Logger log = LoggerFactory.getLogger(HttpDownloadUtility.class);

    /**
     * Downloads a file from a URL
     * @param fileURL HTTP URL of the file to be downloaded
     * @param saveDir path of the directory to save the file
     * @throws java.io.IOException
     */
    public static void downloadFile(String fileURL, String saveDir)
            throws IOException {
        URL url = new URL(fileURL);
        HttpURLConnection httpConn = (HttpURLConnection) url.openConnection();
        int responseCode = httpConn.getResponseCode();

        // always check HTTP response code first
        if (responseCode == HttpURLConnection.HTTP_OK) {
            String fileName = "";
            String disposition = httpConn.getHeaderField("Content-Disposition");
            String contentType = httpConn.getContentType();
            int contentLength = httpConn.getContentLength();

            if (disposition != null) {
                // extracts file name from header field
                int index = disposition.indexOf("filename=");
                if (index > 0) {
                    fileName = disposition.substring(index + 10,
                            disposition.length() - 1);
                }
            } else {
                // extracts file name from URL
                fileName = fileURL.substring(fileURL.lastIndexOf("/") + 1,
                        fileURL.length());
            }

            log.debug("Content-Type = {}", contentType);
            log.debug("Content-Disposition = {}", disposition);
            log.debug("Content-Length = {}",contentLength);
            log.debug("fileName = {}",fileName);

            // opens input stream from the HTTP connection
            InputStream inputStream = httpConn.getInputStream();
            String saveFilePath = Paths.get(saveDir, fileName).toString();

            // opens an output stream to save into file
            FileOutputStream outputStream = new FileOutputStream(saveFilePath);

            int bytesRead = -1;
            byte[] buffer = new byte[BUFFER_SIZE];
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }

            outputStream.close();
            inputStream.close();

            log.debug("File downloaded");
        } else {
            log.debug("No file to download. Server replied HTTP code: {}", responseCode);
        }
        httpConn.disconnect();
    }
}
