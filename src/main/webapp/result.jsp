<%--todo remake--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Результат</title>
</head>
<body>
<h1>Результаты проверки</h1>
<p>${requestScope.isHit ? "Попадание" : "Промах"}</p>
<a href="index.jsp">Вернуться</a>
</body>
</html>
