const express = require("express");
// const db = require("./models");
const app = express();

// Static directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8080;

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("Listening for your beer selection on PORT " + PORT);
  });
});
