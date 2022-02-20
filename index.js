const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");

const app = express();

mongoose
  .connect("mongodb+srv://admin:D8yVuOaSvLSscEil@cluster0.77njw.mongodb.net/tododb?retryWrites=true&w=majority", {
  })
  .then(() => {
    console.log("Connected to Database");
  }).catch((e) => {
    console.log("Connection Error", e);
  });

app.use(cors());
app.use(bodyParser.json());

// app.use("/api", todoRoutes);
app.use("/", todoRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
