"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    form.noValidate = true;
    
    form.addEventListener("submit", evt => {
        for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const span = evt.currentTarget.nextElementSibling;
            if (span) {
                span.textContent = evt.currentTarget.validationMessage;
            }
        });
    }

        for (let element of form.elements) {
            const span = element.nextElementSibling;
            if (span)
                span.textContent = "*";
        }

        const password1 = getElement("#password_1");
        const password2 = getElement("#password_2");
        if( password2.value != password1.value) {
            password1.setCustomValidity("The passwords do not match.");
        }
        else {
            password1.setCustomValidity("");
        }

        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });

});