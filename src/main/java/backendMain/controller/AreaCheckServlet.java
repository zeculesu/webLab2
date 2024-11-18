package backendMain.controller;

import backendMain.utils.HitCheck;
import backendMain.utils.ValidateValue;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/check")
public class AreaCheckServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        try {
            float x = Float.parseFloat(request.getParameter("x"));
            String y = request.getParameter("y");
            int r = Integer.parseInt(request.getParameter("r"));

            if (!(ValidateValue.checkX(x) && ValidateValue.checkY(y) && ValidateValue.checkR(r))) {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Некорректные параметры");
            }

            float yNum = ValidateValue.convertToFloatY(y);
            boolean result = HitCheck.hit(x, yNum, r);

            out.println("<html><body>");
            out.println("<h1>Результат проверки:</h1>");
            out.println("<p>X: " + x + "</p>");
            out.println("<p>Y: " + y + "</p>");
            out.println("<p>R: " + r + "</p>");
            out.println("<p>Попадание в область: " + (result ? "Да" : "Нет") + "</p>");
            out.println("<a href='/'>Назад</a>");
            out.println("</body></html>");
        } catch (NumberFormatException e) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Некорректные параметры");
        } finally {
            out.close();
        }
    }
}
