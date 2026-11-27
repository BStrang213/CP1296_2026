import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.json({ info: "A simple API for Eric's Weather app." })
});
app.post("/weather", async (req, res) => {
    const city = req.body.weather;
        const domain = `https://api.openweathermap.org/data/2.5/weather`;
        const request = `?q=${city}&appid=ac3e849d0db4ebf6411f3988b6df47da`;
        const response = await fetch(domain + request);
        const json = await response.json();
        console.log(json);
        res.json(json);
});

app.listen(3000, () => {
  console.log("API listening on port 3000");
});

//https://openweathermap.org/api/current?collection=current_forecast#geocoding
//erics api key = cdb8c91a6e70993b56fc5c8877c847f3
//my api key = ac3e849d0db4ebf6411f3988b6df47da