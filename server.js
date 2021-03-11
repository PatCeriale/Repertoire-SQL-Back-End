const express = require("express");
const db = require("./models");
const app = express();
// require("dotenv").config();

// Static directory
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Repertoire's back end." });
});

// Get all recipes === getAllRecipes
app.get("/api/recipes", function (req, res) {
  db.Recipe.findAll()
    .then(function (dbRecipe) {
      res.json(dbRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one recipe by id === getOneRecipe
app.get("/api/recipes/:id", function (req, res) {
  db.Recipe.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(function (dbRecipe) {
      res.json(dbRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Create new recipe === createRecipe
app.post("/api/newrecipe", function (req, res) {
  db.Recipe.create({
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
    prepTime: req.body.preptime,
    cookTime: req.body.cooktime,
    servingSize: req.body.servingSize,
    course: req.body.course,
    image: req.body.image,
  })
    .then(function (dbRecipe) {
      // res.redirect("/recipe/:id");
      res.json(dbRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Update recipe by id === updateRecipe
app.put("/api/updaterecipe/:id", function (req, res) {
  db.Recipe.update(req.body, {
    where: {
      id: req.body.id,
      // title: req.body.title,
    },
  })
    .then(function (dbRecipe) {
      res.json(dbRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete recipe by id === deleteRecipe
app.delete("/api/deleterecipe/:id", function (req, res) {
  db.Recipe.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(function (dbRecipe) {
      res.json(dbRecipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("Listening for your recipe selection on PORT " + PORT);
  });
});
