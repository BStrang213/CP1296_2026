"use strict"

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("calculate");
    button.addEventListener("click", () => {
        let money = parseFloat(document.getElementById("cents").value);
        console.log(money);
        let valOfQuarters = Math.floor(money / 25);
        console.log(valOfQuarters);
        document.getElementById("quarters").value = valOfQuarters;
        let remainder = money % 25;
        let valOfDimes = Math.floor(remainder / 10);
        console.log(valOfDimes);
        document.getElementById("dimes").value = valOfDimes;
        remainder %= 10;
        let valOfNickels = Math.floor(remainder / 5);
        console.log(valOfNickels);
        document.getElementById("nickels").value = valOfNickels;
        remainder %= 5;
        console.log(remainder);
        document.getElementById("pennies").value = remainder;
    });

    const button2 = document.getElementById("clear");
    button2.addEventListener("click", () => {
        document.getElementById("quarters").value = "";
        document.getElementById("dimes").value = "";
        document.getElementById("nickels").value = "";
        document.getElementById("pennies").value = "";
    });
})