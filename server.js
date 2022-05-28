const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://nour:nournour@cluster0.ujmhk.mongodb.net/mongoosefirst?retryWrites=true&w=majority ",
  () => console.log("Database is connected")
);

app.use("/", require("./routes/userRoutes"));

app.listen(port, () => console.log("Lestening in port 5000"));
