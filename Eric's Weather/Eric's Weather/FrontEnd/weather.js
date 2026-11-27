 
 document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('citySelect');
    const display = document.getElementById('cityDisplay');
    const report = document.getElementById('report');

    const displayData = (jsonData) => {
        report.innerHTML = "";

        const temp = document.createElement("p");
        temp.textContent = jsonData.main.temp;
        report.appendChild(temp);

        const desc = document.createElement("p");
        desc.textContent = jsonData.weather[0].description;
        report.appendChild(desc);

        const wind = document.createElement("p");
        wind.textContent = jsonData.wind.speed;
        report.appendChild(wind);
    }

    select.addEventListener('change', async() => {
        const option = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"weather": select.value}) 
        }

        let response = await fetch("http://localhost:3000/weather", option);
        const json = await response.json();

        if (select.value === "") {
            display.textContent = "No city selected.";
        } else {
            const selectedText = select.options[select.selectedIndex].text;
            display.textContent = "You selected: " + selectedText;
            displayData(json);
        }
    });
});