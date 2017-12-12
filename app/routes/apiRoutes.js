var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgerplace = require("../models");

router.get("/", function(req, res) {
    burgerplace.all(function(data) {
      var hbsObject = {
        burgerplace: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });