async function handleSubmit(xInput = getInputX(), yInput = getInputY()) {
    const rInput = getInputR();

    const yCheck = checkY(yInput);
    const xCheck = checkX(xInput);
    const rCheck = checkR(rInput);

    if (yCheck && xCheck && rCheck) {
        const yValue = parseFloat(yInput);
        const xValue = parseInt(xInput);
        const rValue = parseInt(rInput);

        const requestContent = {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                x: xValue,
                y: yValue,
                r: rValue
            })
        };

        const startTime = Date.now();
        const url = "/";

        try {
            const response = await fetch(url, requestContent);

            if (!response.ok) return;

            const data = await response.json();
            const endTime = Date.now();
            const duration = endTime - startTime;

            drawPoint(data.x, data.y);
            const time = new Date().toLocaleTimeString();
            const hitResult = data.result;
            const x = data.x;
            const y = data.y;
            const r = data.r;

            addNewLineTable(time, x, y, r, hitResult, duration);
        } catch (error) {
        }
    }
}

function getInputX() {
    const xInputElement = document.getElementById("x");
    return xInputElement ? xInputElement.value : null;
}

function getInputY() {
    const yInputElement = document.querySelector('input[name="y"]');
    return yInputElement ? yInputElement.value : null;
}

function getInputR() {
    const rInputElement = document.querySelector('input[name="radius"]:checked');
    return rInputElement ? rInputElement.value : null;
}

function addNewLineTable(time, x, y, r, hitResult, executionTime) {
    const table = document.getElementById('resultTable');
    const newRow = document.createElement('tr');
    const rowData = [time, x, y, r, hitResult, executionTime];

    rowData.forEach((data, index) => {
        const newCell = document.createElement('td');
        newCell.textContent = data;

        if (index === 4) {
            newCell.style.color = hitResult ? "#25CED1" : "#EA526F";
        }

        newRow.appendChild(newCell);
    });

    table.insertBefore(newRow, table.rows[1]);
}
