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

