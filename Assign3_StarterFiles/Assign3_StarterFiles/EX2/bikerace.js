"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    //prevent html validation
    
    const form = getElement("form");;
    form.noValidate = true;

    // attach invalid event handlers
    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const span = evt.currentTarget.nextElementSibling;
            if (span) {
                span.textContent = evt.currentTarget.validationMessage;
            }
        });
    }
    

    form.addEventListener("submit", evt => {
        //clear error messages
        for (let element of form.elements) {
            const span = element.nextElementSibling;
            if (span)
                span.textContent = "*";
        }
        
        //perform custom validation so birth date is at least 16 years ago
        const birthDate = getElement("#birth");
        const guardian = getElement("#guardian");
        const limit = new Date();
        limit.setFullYear(limit.getFullYear() - 16);
        const birth = new Date(birthDate.value);
        if (birth < limit) {
            guardian.required = false;
        }
        else {
            guardian.required = true;
        }
        
    
        // trigger check form and if error, prevent default submission
        if (!form.checkValidity()) {
            evt.preventDefault();
        }
        
    });

});