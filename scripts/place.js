const wind = 5;
const temp = 10;


function calculateWindChill(wind, temp) {
    windchill = 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16);
    return windchill
}

let windchill = 0;

if (wind > 4.8 && temp <= 10) {
    windchill = calculateWindChill(wind, temp).toFixed(1);
}

document.getElementById("windchill").textContent = `${windchill} °C`;