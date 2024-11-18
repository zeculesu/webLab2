package backendMain.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/")
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getRequestDispatcher("/index.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String uri = request.getRequestURI();
        if (!"/fastcgi/".equals(uri)) {
            response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "Неправильный URI");
            return;
        }

        String xStr = request.getParameter("x");
        String yStr = request.getParameter("y");
        String rStr = request.getParameter("r");


        if (xStr == null || yStr == null || rStr == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Не все параметры переданы");
            return;
        }

        request.getRequestDispatcher("/check").forward(request, response);
    }
}
