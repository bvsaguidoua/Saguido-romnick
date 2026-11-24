const express = require("express");
const mongoose = require("mongoose")
const port = 4000;

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/ADBS-TASK-MANAGEMENT");
let db = mongoose.connection;
db.on("error", () => console.log("Cannot connect to MongoDB"));
db.once("open", () => console.log("You are now connected to MongoDB Compass."));

//port listening
app.listen(port, () => console.log(`API is now live at port ${port}.`));




