"use strict"

async function getNewsData(appid) {
    const domain = `https://proxy.cors.dev/https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/`;
    const request = `?appid=${appid}&count=5`;
    const response = await fetch(domain + request);
    return await response.json();
}

document.addEventListener("DOMContentLoaded", ()  => {
    let steamID = document.querySelector("#steamGameID");
    let getNewsButton = document.querySelector("#getNewsButton");
    getNewsButton.addEventListener("click", () => {
        console.log("Test complete!")
        console.log(getNewsData(steamID.value));
    })
})