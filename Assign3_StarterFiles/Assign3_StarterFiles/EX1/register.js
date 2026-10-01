"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", function() {
    let form = getElement("#registration_form");
    form.noValidate = true;

    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const span = evt.currentTarget.nextElementSibling;
            if (span) {
                span.textContent = evt.currentTarget.validationMessage;
            }
        });
    }

    form.addEventListener("submit", evt => {
        for (let element of form.elements) {
            const span = element.nextElementSibling;
            if (span)
                span.textContent = "*";
        }

        if (!form.checkValidity()) {
            evt.preventDefault();
        }
    });
});
