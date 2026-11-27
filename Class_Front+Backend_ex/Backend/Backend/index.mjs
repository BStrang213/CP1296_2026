import express from "express";
import cors from "cors";

const app = express();     // create Express app object
app.use(cors());           // add CORS middleware
app.use(express.json());   // add JSON middleware

// route that handles GET requests to the API root
app.get("/", (request, response) => {
  response.json({info: "An API that includes CORS headers."});
});

app.post("/movie", (req, res) => {
    const name = req.body.movie;
    if( name == "Matrix" ) {
        res.json( {  "title": "The Matrix",
                          "year": 1999,
                          "genre": "Science Fiction",
                          "rating": 8.7  })
    }
    else if( name == "Titanic" ) {
        res.json( {  "title": "Titanic",
                          "year": 1997,
                          "genre": "Romance",
                          "rating": 8.4  })
    }
    else {
        res.status(404).json({ 
            error: 'Not Found', 
            message: `Do not have info for movie ${name}` 
        });
    }
})

// listen for requests on port 3000
app.listen(3000, () => {
  console.log("API listening on port 3000");
});
