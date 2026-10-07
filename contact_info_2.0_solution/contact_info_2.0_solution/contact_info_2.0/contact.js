"use strict";
const getElement = selector => document.querySelector(selector);


document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form")
    form.noValidate = true;

    form.addEventListener("submit", (evt)=> {
        const inputElements = document.querySelectorAll("input");
        for( let element of inputElements) {
            const span = element.nextElementSibling;
            if( span ) {
                span.textContent = "*"
            }
        }

        for( let element of form.elements) {
            element.addEventListener("invalid", (evt) => {
                const span = element.nextElementSibling;
                if( span ) {
                    span.textContent = element.validationMessage;
                }
            })
        }

        const email = getElement("#email");
        const phone = getElement("#phone");
        if( email.value != "") {
            phone.required = false;
        }
        else if( phone.value != "") {
            email.required = false;
        }

        const dob = getElement("#dob");
        const birthDate = new Date(dob.value);

        const today = new Date();
        const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);

        if( birthDate > yesterday) {
            dob.setCustomValidity("Birthdate needs to be in the past")
        }
        else {
            dob.setCustomValidity("");
        }

        if(!form.checkValidity()) {
            evt.preventDefault();
        }
    })
})

