let resultInput = document.getElementById('result');

function appendToResult(value) {
    resultInput.value += value;
}

function clearResult() {
    resultInput.value = '';
}

function calculate() {
    let result = eval(resultInput.value);
    resultInput.value = result;
}
function toggleSign() {
    resultInput.value = -parseFloat(resultInput.value);
}

function calculatePercentage() {
    resultInput.value = parseFloat(resultInput.value) / 100
}