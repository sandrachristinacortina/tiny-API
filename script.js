const express = require("express");
const server = express();
server.use(express.json());
server.listen(3006);

const movies = [
    {id: 1,
     title: "The Shawshank Redemption"
    },
    {id: 2,
     title: "The Godfather"
    }
];

let nextId = 3;
server.get("/movies", (req, res) => {
    res.json(movies);
});

server.post("/movies", (req, res) => {
    if (req.body === undefined) {
  return res.status(400).json({ error: "JSON body required" });
}
  const newMovie = {
    id: nextId,
    title: req.body.title
  };
  movies.push(newMovie);
  nextId++;
  res.status(201).json(newMovie);
});
 