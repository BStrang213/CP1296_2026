"use strict";

const getElement = selector => document.querySelector(selector);
document.addEventListener("DOMContentLoaded", () => {
    let celsiusCheck = document.getElementById("to_celsius");
    let fahrenheitCheck = document.getElementById("to_fahrenheit");
    const button = document.getElementById("convert");
    celsiusCheck.addEventListener("click", () => {
        document.getElementById("degrees_entered").removeAttribute("disabled");
        document.getElementById("degrees_computed").setAttribute("enabled", "true");
        button.addEventListener("click", () => {
            let celcius = document.getElementById("degrees_entered").value;
            console.log(celcius)
            let to_fahrenheit = (celcius - 32) * (5/9);
            console.log(to_fahrenheit);
        });
    });
    fahrenheitCheck.addEventListener("click", () => {
        document.getElementById("degrees_entered").setAttribute("enabled", "true");
        document.getElementById("degrees_computed").removeAttribute("disabled");
        let fahrenheit = document.getElementById("degrees_computed").value;
        button.addEventListener("click", () => {
            let to_celsius = (fahrenheit * (5/9)) + 32;
            console.log(to_celsius);
            fahrenheit = to_celsius;
        });
    });

});
