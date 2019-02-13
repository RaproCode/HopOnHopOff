const express = require("express");

const City = require("../models/city-models");
const Busline = require("../models/bustrip-models");

const router = express.Router();

// result of user input -- Departure city
router.get("/resa/:resaId", (req, res, next) => {
  City.find()
    .then(resaDoc => {
      res.locals.cityItem = resaDoc;
      res.render("resa-views/resa-result.hbs");
    })
    .catch(err => next(err));
});

// user need to sign up before continue to option itinerary
router.get("/resa/:resaId/city/:cityName", (req, res, next) => {
  // req.user comes from Passport's deserializeUser()
  // (it's the document from the database of the logged-in user)
  if (req.user) {
    // AUTHORIZATION: only show the itinerary if you are logged-in
    res.render("resa-views/resa-option.hbs");
  } else {
    // redirect to the sign up page if you ARE NOT logged-in
    req.flash("error", "You have to be signUp to create itinerary");
    res.redirect("/signup");
  }

  // user choices of itinerary
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
});

// Summary of user order
// router.get("/resa/:resaId/:summary", (req, res, next) => {
//   const { resaId, summary } = req.params;

//   Busline.find({ "cities.startingCity": summary })
//   .then( => {

//   })
//   .catch(err => next(err));
// };

module.exports = router;
