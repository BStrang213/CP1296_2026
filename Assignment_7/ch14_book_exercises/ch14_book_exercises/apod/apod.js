"use strict";

function getElement(selector) {
    return document.querySelector(selector);
}

// Returns today's date in YYYY-MM-DD format (local time).
// In the exercise, move this function to lib_apod.js and export it.
function getDateString(dt = new Date()) {
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// In the exercise, move this function to lib_apod.js and export it.
async function getPicture(date) {
    // WordPress APOD expects YYMMDD in the URL, not ?date=YYYY-MM-DD.
    const dateCode = getDateString(date).slice(2).replaceAll("-", "");
    const endpoint = `https://science.nasa.gov/wp-json/wp/v2/apod-basic/${dateCode}`;
    const response = await fetch(endpoint);

    // fetch() does not reject on HTTP 404 or 500 responses.
    if (!response.ok) {
        throw new Error(`NASA APOD request failed (HTTP ${response.status}).`);
    }
    return await response.json();
}

function clear() {
    getElement("#title").textContent = "";
    getElement("#display").textContent = "";
    getElement("#explanation").textContent = "";
    getElement("#msg").textContent = "";
}

function displayPicture(data) {
    if (data.code || data.error) {
        getElement("#msg").textContent = data.message || data.error?.message || "APOD data could not be loaded.";
        return;
    }

    getElement("#title").textContent = data.title || "Astronomy Picture of the Day";
    const displayDiv = getElement("#display");

    if (data.media_type === "image" && data.hdurl) {
        // On the new endpoint, data.url is the article permalink, not the image.
        const img = document.createElement("img");
        img.src = data.hdurl;
        img.alt = data.title || "NASA astronomy picture";
        img.style.maxWidth = "100%";
        img.style.height = "auto";
        displayDiv.appendChild(img);
    } else {
        // Video/iframe posts may not provide a directly embeddable video URL.
        // Open the NASA APOD page rather than embedding an article URL in an iframe.
        const link = document.createElement("a");
        link.href = data.permalink || data.url || "https://science.nasa.gov/";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "View this APOD on NASA's website";
        displayDiv.appendChild(link);
    }

    getElement("#explanation").innerHTML = data.explanation || "";
}

// Validate the typed date without relying on Date parsing of malformed strings.
function parseDate(dateString) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return null;
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        return null;
    }
    return date;
}

document.addEventListener("DOMContentLoaded", () => {
    const dateTextbox = getElement("#date");
    dateTextbox.value = getDateString();
    dateTextbox.focus();

    getElement("#view_button").addEventListener("click", async () => {
        clear();
        const date = parseDate(dateTextbox.value.trim());
        if (!date) {
            getElement("#msg").textContent = "Please enter a valid date in YYYY-MM-DD format.";
        } else if (date < new Date(1995, 5, 16) || date > new Date()) {
            getElement("#msg").textContent = "Choose a date from June 16, 1995 through today.";
        } else {
            try {
                const data = await getPicture(date);
                displayPicture(data);
            } catch (error) {
                getElement("#msg").textContent = error.message;
            }
        }
        dateTextbox.focus();
    });
});
