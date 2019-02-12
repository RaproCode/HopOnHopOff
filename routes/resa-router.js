const express = require("express");

const City = require("../models/city-models");
const router = express.Router();

router.get("/resa/:resaId", (req, res, next) => {
  City.find()
    .then(resaDoc => {
      console.log(resaDoc, "ggygygygygygyggygyggygy");
      res.locals.cityItem = resaDoc;
      res.render("resa-views/resa-result.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
