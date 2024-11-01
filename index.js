const inputField = document.getElementById('inputValue');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const submitButton = document.getElementById('submitButton');

const resultSection = document.getElementById('result');
function convertTemp() {
    inputValue = Number(inputField.value);
    if(toFahrenheit.checked){
        let result = ((inputValue * 9/5) + 32).toFixed(1);
        resultSection.textContent = `Result: ${result}°F`
    } else if (toCelsius.checked) {
        let result = ((inputValue - 32) * 5/9).toFixed(1);
        resultSection.textContent = `Result: ${result}°C`
    } else {
        alert("No unit selected for conversion!");
    }
}