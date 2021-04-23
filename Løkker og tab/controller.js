function move(index, change) {
    let value = numbers[index];
    numbers.splice(index, 1) // delete
    numbers.splice(index + change, 0, value) // insert
    updateView();
}

function deleteNumber(index) {
    numbers.splice(index, 1)
    updateView();
}

function pop() {
    numbers.pop();
    updateView();
}

function shift() {
    numbers.shift();
    updateView();
}

function unshift() {
    numbers.unshift(numberInput);
    updateView();
}

function push() {
    numbers.push(numberInput);
    updateView();
}