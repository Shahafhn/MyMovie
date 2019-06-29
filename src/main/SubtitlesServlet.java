package main;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class SubtitlesServlet extends HttpServlet {
    private final static String dir = "/home/akraililo/mymovie/subtitles/";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String dir = "D:\\projects\\subtitles\\";
        String subtitle = request.getParameter("for");
        if (subtitle != null) {
            File file = new File(dir + subtitle + ".vtt");
            if (file.isFile()){
                response.addHeader("Access-Control-Allow-Origin", "*");
                response.setCharacterEncoding("UTF-8");
                response.setContentType("text/vtt");
                response.setHeader("Content-Disposition", "inline; filename=\"" + file.getName() + "\"");
                Files.copy(file.toPath(),response.getOutputStream());
            }
        }
    }
}
