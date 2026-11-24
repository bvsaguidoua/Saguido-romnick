const express = require('express');
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Import Task Routes
const taskRoutes = require("./routes/TaskRoutes.js");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/ADBS-TASK-MANAGEMENT");
let db = mongoose.connection;
db.on("error", () => console.log("Cannot connect to MongoDB"));
db.once("open", () => console.log("You are now connected to MongoDB Compass."));

// Use Task Routes under /tasks prefix
app.use("/tasks", taskRoutes);

app.listen(port, () => console.log(`Server is running at port ${port}`));