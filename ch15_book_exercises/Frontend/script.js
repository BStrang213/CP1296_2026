// For testing purposes put tihese files in there own VSCode and take them out of the repo.


document.addEventListener("DOMContentLoaded", async => {
    const dropDown = document.querySelector("#movieSelect");

    const showMovie = (jsonData) => {
        let dataList = document.querySelector("#movieInfo");
        dataList.innerHTML = "";

        const title = document.createElement("p")
        title.textContent = jsonData.title;
        dataList.appendChild(title)

        const year = document.createElement("p")
        year.textContent = jsonData.year;
        dataList.appendChild(year)

        const rating = document.createElement("p")
        rating.textContent = jsonData.rating;
        dataList.appendChild(rating)

        const genre = document.createElement("p")
        genre.textContent = jsonData.genre;
        dataList.appendChild(genre)
    }

    dropDown.addEventListener("change", async () => {
        console.log(dropDown.value);
        const movie = dropDown.value;
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({movie})
        }
        const response = 
            await fetch("http://localhost:3000/movie", options);
        const json = await response.json();
        console.log(json);
        showMovie(json)
    })
});