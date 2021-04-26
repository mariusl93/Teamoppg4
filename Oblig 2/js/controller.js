function leggtil() {
    /* inputValue <= 0 || inputValue >= 11 ? alert("nei fy") : inputValue = parseInt(inputValue); numbers.push(inputValue);
    show(); */

    if (inputValue <= 0 || inputValue >= 11) {
        alert("Nei! Kutt ut!")
    }
    else {
        inputValue = parseInt(inputValue);
        numbers.push(inputValue);
        inputValue = null;

        show();
    };

}

function denvalgte(barNo) {

    if (chosenBar === barNo) {
        chosenBar = "Ingen"
        knappstatus = "disabled";
        show();

        return;
    }

    chosenBar = barNo;
    knappstatus = "";

    show();
}

function deleteBar() {

    if (chosenBar != "Ingen") {
        numbers.splice(chosenBar - 1, 1)
        show();
    }

    chosenBar = "Ingen";
    knappstatus = "disabled";

    show();
}

function changeBar() {

    if (inputValue != null && inputValue < 11 && inputValue > 0) {
        numbers[chosenBar - 1] = inputValue

        show();
    }
    else {
        alert("NEI DETTÆ FUNKÆR IKKE");
    }

}