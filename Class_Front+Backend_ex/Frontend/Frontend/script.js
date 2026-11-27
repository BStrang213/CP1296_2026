
document.addEventListener("DOMContentLoaded", () => {

    const showMovie = (jsonData) => {
        const movieDiv = document.querySelector("#movieInfo");
        movieDiv.innerHTML = "";

        const title = document.createElement("p")
        title.textContent = jsonData.title;
        movieDiv.appendChild(title)

        const year = document.createElement("p")
        year.textContent = jsonData.year;
        movieDiv.appendChild(year)

        const rating = document.createElement("p")
        rating.textContent = jsonData.rating;
        movieDiv.appendChild(rating)

        const genre = document.createElement("p")
        genre.textContent = jsonData.genre;
        movieDiv.appendChild(genre)



    }

    const movieChoice = document.querySelector("#movieSelect");
    movieChoice.addEventListener("change", async ()=> {
        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"movie": movieChoice.value})
        }
        //{"movie": "Matrix"}
        let response = await fetch("http://localhost:3000/movie", options);
        const json = await response.json();
        console.log(json)
        showMovie(json);
    })
})