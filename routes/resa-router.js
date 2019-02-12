const express = require("express");

const City = require("../models/city-models");
const Busline = require("../models/bustrip-models");

const router = express.Router();

router.get("/resa/:resaId", (req, res, next) => {
  City.find()
    .then(resaDoc => {
      res.locals.cityItem = resaDoc;
      res.render("resa-views/resa-result.hbs");
    })
    .catch(err => next(err));
});

router.get("/resa/:resaId/city/:cityName", (req, res, next) => {
  const { resaId, cityName } = req.params;

  Busline.find({ "cities.startingCity": cityName })
    .then(lines => {
      console.log(lines, "wahawahwaah");
      res.locals.lineArray = lines;
      res.render("resa-views/resa-option.hbs");
      // res.json(lines);
    })
    .catch(err => next(err));
});

module.exports = router;
