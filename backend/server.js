const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();

app.get("/", (req, res) => {
    res.send("API Running!");
});

app.get('/api/chat', (req,res) => {
    res.send(chats);
});

app.get("/api/chat/:id", (req,res) => {
    console.log(req);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server started on PORT ${PORT}`));