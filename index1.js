const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

function convert() {
    let temp = Number(textBox.value);

    if (isNaN(temp)) {
        result.textContent = "⚠️ Please enter a valid number!";
        return;
    }

    if (toFahrenheit.checked) {
        let converted = temp * 9 / 5 + 32;
        result.textContent = `🔥 ${temp}°C = ${converted.toFixed(1)}°F`;
    } else if (toCelsius.checked) {
        let converted = (temp - 32) * 5 / 9;
        result.textContent = `❄️ ${temp}°F = ${converted.toFixed(1)}°C`;
    } else {
        result.textContent = "⚠️ Please select a conversion type!";
    }
}