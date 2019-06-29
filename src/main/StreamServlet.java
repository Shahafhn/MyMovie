package main;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import javax.servlet.http.*;

public class StreamServlet extends javax.servlet.http.HttpServlet {

    private final static String dir = "/home/akraililo/downloads/";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        //      String dir = "D:\\Movies\\Marvel\\20. Antman and the Wasp\\";
//      String movie = "Ant-Man.And.The.Wasp.2018.1080p.BluRay.x264-[YTS.AM]";
        String movie = request.getParameter("movie");
        File file = new File(dir + movie + ".mp4");
        if (file.isFile()) {
            response.setContentType("video/mp4");
            response.setHeader("Content-Disposition", "inline; filename=\"" + file.getName() + "\"");
            response.setHeader("Content-Length", String.valueOf(file.length()));
//            response.setBufferSize(8192);
            try {
//                Files.copy(file.toPath(), new BufferedOutputStream(response.getOutputStream(), 8192));
                Files.copy(file.toPath(),response.getOutputStream());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
