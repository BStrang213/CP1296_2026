import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
    response.json({ info: "A simple API for Eric's Weather app." })
});
app.post("/weather", (req, res) => {
    const city = req.body.weather;
    if (city == "toronto") {
        res.json( { "city": "Toronto",
            "description": "Sunny",
            "Temperature": "23°C",
            "windspeed": "2kn" })
    }
    else if (city == "vancouver") {
        res.json( { "city": "Vancouver",
            "description": "Rainy",
            "Temperature": "19°C",
            "windspeed": "4kn" })
    }
    else if (city == "montreal") {
        res.json( { "city": "Monteal",
            "description": "Tornado",
            "Temperature": "10°C",
            "windspeed": "50kn" })
    }
    else if (city == "halifax") {
        res.json( { "city": "Halifax",
            "description": "tsunami",
            "Temperature": "15°C",
            "windspeed": "16kn" })
    }
    else {
        res.status(404).json({ 
            error: 'Not Found', 
            message: `Do not have info for the city of ${city}` 
        });
    }
});

app.listen(3000, () => {
  console.log("API listening on port 3000");
});