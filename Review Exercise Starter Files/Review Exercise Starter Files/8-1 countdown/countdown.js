"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {

    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  

        // make sure user entered event and date 
        if (eventName == "" || eventDateString == "") {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // convert event date string to Date object and check for validity
        const eventDate = new Date(eventDateString);
        if (eventDate.toString() == "Invalid Date") {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
        const today = new Date();
        let msFromToday = eventDate.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000; // hrs * mins * secs * milliseconds
        msFromToday = msFromToday % msForOneDay;
        const msForHours =  60 * 60 * 1000;
        msFromToday = msFromToday % msForHours;
        const msForMinutes = 60 * 1000;
        msFromToday = msFromToday % msForMinutes;
        const msForSeconds = 1000;
        const daysToDate = Math.ceil( msFromToday / msForOneDay ); 
        const hoursToDate = Math.ceil( msFromToday / msForHours);
        const minutesToDate = Math.ceil( msFromToday / msForMinutes);
        const secondsToDate = Math.floor( msFromToday / msForSeconds);

        // create and display message 
        const displayDate = eventDate.toDateString();
        let msg = "";
        if (daysToDate == 0) {
            msg = `Hooray! Today is ${eventName}! (${displayDate})`;
        } else if (daysToDate > 0) {
            msg = `${daysToDate} day(s), ${hoursToDate} hours, ${minutesToDate} minutes, and ${secondsToDate} seconds until ${eventName}! (${msForOneDay})`;
        } else if (daysToDate < 0) {
            msg = `${eventName} happened ${Math.abs(daysToDate)} 
                   day(s) ago. (${displayDate})`;
        }
        messageLbl.textContent = msg;
    });

    // set focus on first text box
    getElement("#event").focus();
});