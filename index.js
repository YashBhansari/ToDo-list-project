const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster1.nqvqztn.mongodb.net?retryWrites=true&writeConcern=majority");



app.listen(3000, (req, res) => {
    console.log("Server Chalu...!!!");
})

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));

module.exports = app;