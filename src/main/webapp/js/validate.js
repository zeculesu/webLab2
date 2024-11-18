function checkY(y) {
    if (y === null || y === "" || isNaN(y)) {
        showNotification("Введите корректное число для Y в промежутке от -5 до 3");
        return false;
    }
    const yNumber = parseFloat(y);
    if (isNaN(yNumber)) {
        showNotification("Y должно быть числом!");
        return false;
    }
    if (/^-5/.test(y) || /^3/.test(y) || yNumber.toFixed(15) < -5 || yNumber.toFixed(15) > 3) {
        showNotification("Значение Y должно быть в диапазоне от -5 до 3");
        return false;
    }
    return true;
}

function checkX(x) {
    if (x === null || x === "" || isNaN(x)) {
        showNotification("Выберите значение для X!");
        return false;
    }
    const xNumber = parseInt(x);
    if (parseFloat(x) - xNumber !== 0) {
        showNotification("X должно быть целым числом");
        return false;
    }
    if (!(xNumber >= -3 && xNumber <= 5)) {
        showNotification("Значение X должно быть в диапазоне от -3 до 5");
        return false;
    }
    return true;
}

function checkR(r) {
    if (r === null) {
        showNotification("Выберите значение для R!");
        return false;
    }
    const rNumber = parseInt(r);
    if (isNaN(rNumber)) {
        showNotification("R должно быть числом!");
        return false;
    }
    if (rNumber < 1 || rNumber > 5) {
        showNotification("Значение R должно быть в диапазоне от 1 до 5");
        return false;
    }
    return true;
}
