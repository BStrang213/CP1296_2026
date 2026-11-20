"use strict";

const getElement = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/?userId=#';
    // load <select> element
    

    // display to-do items for first user in <select> element
    const user = document.getElementById("users");

    async function getUser(user) {
    const domain = `https://jsonplaceholder.typicode.com/todos/`;
    const request = `?userId=#${user}`;
    const response = await fetch(domain + request);
    return await response.json();  
}
    

    // event handler for <select> change event
    
 });