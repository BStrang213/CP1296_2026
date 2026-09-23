"use strict"
document.addEventListener("DOMContentLoaded", () => {
    //setInterval( displayTimeLeft, 1000);
    const button = document.querySelector("#countdown");
    let intervalTimer = null;
    button.addEventListener("click", () => {
        if( intervalTimer == null ) {
            intervalTimer = setInterval( displayTimeLeft, 1000);
            button.textContent = "Stop";
            displayTimeLeft();
        }
        else {
            clearInterval(intervalTimer);
            intervalTimer = null;
            button.textContent = "Countdown";
        }
    })
});

const displayTimeLeft = () => {
   
    const now = new Date();
    const grandOpening = new Date("2026-10-01T08:00Z");
    let difference = grandOpening.getTime() - now.getTime();
    const daysMillis = 24 * 60 * 60 * 1000;
    const days = Math.trunc(difference / daysMillis);
    difference = difference % daysMillis;
    const textElements = document.querySelectorAll("#time p");
    const hours = Math.trunc(difference / (60 * 60 * 1000));
    difference = difference % (60 * 60 * 1000);
    const minutes = Math.trunc(difference / (60 * 1000));
    difference = difference % (60 * 1000);
    const seconds = Math.trunc(difference / 1000);

    const dateElements = ["Days: "+days, "Hours: "+hours, "Minutes: "+minutes, "Seconds: "+seconds];
    for (let i = 0; i < textElements.length; i++) {
         textElements[i].textContent = dateElements[i]   
    }
}





//console.log(offset);


/*let openingTimestamp = grandOpening.getMilliseconds();
console.log(openingTimestamp);*/

/*const grandClosing = new Date(grandOpening);
grandClosing.setDate( grandOpening.getDate() - 100);
console.log(grandOpening);
console.log(grandClosing);*/