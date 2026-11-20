// Returns today's date in YYYY-MM-DD format (local time).
// In the exercise, move this function to lib_apod.js and export it.
export function getDateString(dt = new Date()) {
    const year = dt.getFullYear();
    const month = String(dt.getMonth() + 1).padStart(2, "0");
    const day = String(dt.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// In the exercise, move this function to lib_apod.js and export it.
export async function getPicture(date) {
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