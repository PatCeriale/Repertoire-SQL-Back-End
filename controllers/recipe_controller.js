var express = require("express");
var router = express.Router();
var db = require("../models/");

module.exports = function (app) {
  // Get all recipes
  router.get("/recipes", function (req, res) {
    db.Recipe.findAll({
      // include: [db.Rating,db.Style,db.Brewery]
    }).then(function (dbRecipes) {
      const dbRecipesJson = dbRecipes.map((recipe) => recipe.toJSON());
      var recipeObject = {
        recipe: dbRecipesJson,
        user: req.session.user,
        employee: req.session.employee,
      };
      return res.render("recipes", recipeObject);
    });
  });

  // Get one recipe
  router.get("/recipes/:id", function (req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id,
      },
      // include: [db.Rating,db.Style,db.Brewery]
    }).then(function (dbRecipes) {
      const dbRecipesJson = dbRecipes.map((recipe) => recipe.toJSON());
      var recipeObject = {
        recipe: dbRecipesJson,
        user: req.session.user,
        employee: req.session.employee,
      };
      return res.render("beers", recipeObject);
    });
  });

  //Create new recipe
  app.post("/api/newrecipe", function (req, res) {
    db.Recipe.create({
      title: req.body.title,
      // description: req.body.description,
      // prepTime: req.body.preptime,
      // cookTime: req.body.cooktime,
      // servingSize: req.body.servingSize,
      // course: req.body.course,
      // image: req.body.image,
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
};
