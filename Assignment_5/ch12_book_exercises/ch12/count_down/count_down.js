"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    getElement("#countdown").addEventListener("click", () => {
        const eventName = getElement("#event").value;
        const eventDateString = getElement("#date").value;  
        const messageLbl = getElement("#message");  
        const eventdata = new Event(eventName, eventDateString);

        // make sure user entered event name and date 
        if (!eventdata.hasName || !eventdata.hasDate) {
            messageLbl.textContent = "Please enter both a name and a date.";
            return;
        }

        // make sure date is valid
        const eventDate = new Date(eventDateString);
        if (!eventdata.isValidDate) {
            messageLbl.textContent = "Please enter a valid date.";
            return;
        }

        // calculate days
 

        // create and display message 

    });

    // set focus on first text box
    getElement("#event").focus();
});