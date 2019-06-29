package main;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class PicturesServlet extends HttpServlet {
    private static final String directory = "/home/akraililo/mymovie/pictures/";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String picture = request.getParameter("pic");
        if (picture != null) {
//            String directory = "D:\\projects\\";
            response.setContentType("image/jpeg");
            File file = new File(directory + picture + ".jpg");
            if (file.isFile())
                Files.copy(file.toPath(),response.getOutputStream());
        }
    }
}
