const mongoose = require('mongoose');
const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require("passport");
const images = require("./routes/api/upload");
const labels = require("./routes/api/vision");


// Import routes
const users = require("./routes/api/users");
const recipes = require("./routes/api/recipes");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  // debugger;
  res.send("Hello PiCook");
});

app.use(passport.initialize());
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// routes used
app.use("/api/users", users);
app.use("/api/recipes", recipes);
app.use("/api/image-upload", images);
app.use("api/search-vision", labels);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));