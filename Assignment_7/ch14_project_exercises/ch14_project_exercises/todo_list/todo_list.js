"use strict";

const getElement = selector => document.querySelector(selector);

async function getUserItems(id) {
    const domain = `https://jsonplaceholder.typicode.com/todos/`;
    const request = `?userId=#${id}`;
    const response = await fetch(domain + request);
    return await response.json();  
}

async function getUser(user) {
    const domain = `https://jsonplaceholder.typicode.com/users/`;
    const request = `${user}`;
    const response = await fetch(domain + request);
    return await response.json();  
}



document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/?userId=#';
    // load <select> element
    let user = document.getElementById("users");
    const data = getUser(user.value);
    console.log(data);
    user = getUser(1);
    

    // display to-do items for first user in <select> element
    // user.addEventListener("change", async (evt) => {
    //     console.log(data);

    // })

    

    // event handler for <select> change event
    
 });