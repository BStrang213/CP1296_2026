"use strict";
const getElement = selector => document.querySelector(selector);

const domain = "https://rovers.nebulum.one/api/v1/rovers";

const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#date")
const rover = document.querySelector("#rover")

async function getdate(year, month, day) {
    const domain = `https://rovers.nebulum.one/api/v1/rovers/Curiosity/photos/?earth_date=2026-2-18`;
    const request = `?earth_date=${year}-${month}-${day}`;
    const response = await fetch(domain + request);
    return await response.json();  
}

async function getRover(rover) {
    const domain = `https://rovers.nebulum.one/api/v1/rovers/Curiosity/photos/?earth_date=2024-2-19&camera=MAST_LEFT`;
    const request = `${rover}/photos/?earth_date=${year}-${month}-${day}&camera=${camera}`;
    const response = await fetch(domain + request);
    return await response.json();  
}



document.addEventListener("DOMContentLoaded", async () => {
    // get rover data
    const url = `https://rovers.nebulum.one/api/v1/rovers/`;
    let roverData = getRover(rover.value)







    

    // change event handler for Rover drop-down
    getElement("#rover").addEventListener("change", async (evt) => {
        
    });

    // click event handler for View button
    getElement("#view").addEventListener("click", async () => {
        
    });
});