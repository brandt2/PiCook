const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/key').mongoURI;
const bodyParser = require('body-parser');

// Import routes
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello PiCook"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes used
app.use("/api/users", users);
app.use("/api/recipes", recipes);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));