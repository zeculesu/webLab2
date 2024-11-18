<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.6.3.js"
            integrity="sha256-nQLuAZGRRcILA+6dMBOvcRh5Pe310sBpanc6+QBmyVM=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/style.css">
    <script src="${pageContext.request.contextPath}/js/callbacks.js"></script>
    <script src="${pageContext.request.contextPath}/js/validate.js"></script>
    <script src="${pageContext.request.contextPath}/js/drawGraph.js"></script>
    <script src="${pageContext.request.contextPath}/js/utils.js"></script>
    <title>Lab2</title>
</head>
<body>
<header>
    Самойлова Артемия Александровна P3230 409553
</header>
<div id="notification-container"></div>
<div id="main" class="grid-container">
    <div class="canvas-container">
        <canvas id="graphCanvas" width="400" height="400"></canvas>
        <script>draw()</script>
    </div>
    <div class="form-container">
        <h3 class="centered">Выберите значения:</h3>
        <form id="value-form" action="result.jsp" method="post">
            <label for="x">X =</label>
            <select name="x" id="x">
                <%
                    for (int i = -3; i <= 5; i++) {
                        out.println("<option value=\"" + i + "\">" + i + "</option>");
                    }
                %>
            </select>
            <p>
                <label>
                    Y = <input type="text" name="y">
                </label>
                ∈(-5;3)
            </p>
            <div class="radio-group">
                R =
                <label><input type="radio" name="radius" value="1" onchange="draw(1)">1</label>
                <label><input type="radio" name="radius" value="2" onchange="draw(2)">2</label>
                <label><input type="radio" name="radius" value="3" onchange="draw(3)">3</label>
                <label><input type="radio" name="radius" value="4" onchange="draw(4)">4</label>
                <label><input type="radio" name="radius" value="5" onchange="draw(5)">5</label>
            </div>
            <div class="button-container">
                <button type="submit">Жмяк</button>
            </div>
        </form>
    </div>
</div>
</body>
</html>
