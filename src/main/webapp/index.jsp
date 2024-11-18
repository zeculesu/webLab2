<%--todo переделать--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Лаба 2</title>
    <script>
        function validateForm() {
            const x = document.forms["pointForm"]["x"].value;
            const y = document.forms["pointForm"]["y"].value;
            const r = document.forms["pointForm"]["r"].value;
            if (isNaN(x) || isNaN(y) || isNaN(r) || x === "" || y === "" || r === "") {
                alert("Пожалуйста, введите корректные значения.");
                return false;
            }
            return true;
        }
    </script>
</head>
<body>
<h1>Лаба 2 - Проверка попадания точки</h1>
<form name="pointForm" method="GET" action="controller" onsubmit="return validateForm();">
    X: <input type="text" name="x"><br>
    Y: <input type="text" name="y"><br>
    R: <input type="text" name="r"><br>
    <button type="submit">Проверить</button>
</form>
</body>
</html>
