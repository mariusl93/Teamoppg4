function updateView() {
    document.getElementById('app').innerHTML = `
        <button onclick="pop()">Pop</button>
        <button onclick="shift()">Shift</button>
        <br/>
        <input 
            type="text" 
            oninput="numberInput = this.value" 
            value="${numberInput}"  
            />
        <button onclick="push()">Push</button>
        <button onclick="unshift()">Unshift</button>
        <hr/>
        <div>
            ${numbers.length} tall 
            - sum = ${getSum()} 
            - antall partall = ${countEvenNumbers()}
        </div>
        <hr/>
        <ul>
            ${createNumbersHtml()}            
        </ul>
    `;
}
function createNumbersHtml() {
    let numbersHtml = '';
    for (index = 0; index < numbers.length; index++) {
        numbersHtml += `
            <li>
                ${numbers[index]}
                <button onclick="deleteNumber(${index})">×</button>
                <button onclick="move(${index},-1)">▲</button>
                <button onclick="move(${index},1)">▼</button>
            </li>                    
        `;
    }
    return numbersHtml;
}

function getSum() {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function countEvenNumbers() {
    let count = 0;
    for (let number of numbers) {
        if (number % 2 == 0) count++;
    }
    return count;
}