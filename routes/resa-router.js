const express = require("express");

const City = require("../models/city-models");
const Busline = require("../models/bustrip-models");

const Resa = require("../models/resa-models");

const router = express.Router();

const { sendConfirmationMail } = require("../config/nodemailer-setup.js");

// result of user input -- Departure city
router.get("/resa/:resaId", (req, res, next) => {
  City.find()
    .then(resaDoc => {
      res.locals.cityItem = resaDoc;
      res.render("resa-views/resa-result.hbs");
    })
    .catch(err => next(err));
});

// // user need to sign up before continue to option itinerary
router.get("/resa/:resaId/city/:cityName", (req, res, next) => {
  // req.user comes from Passport's deserializeUser()
  // (it's the document from the database of the logged-in user)
  const { resaId, cityName } = req.params;

  if (req.user) {
    // AUTHORIZATION: only show the itinerary if you are logged-in
    Busline.find({ "cities.startingCity": cityName })
      .then(lines => {
        console.log(lines, "wahahahha");

        res.locals.lineArray = lines;
        res.render("resa-views/resa-option.hbs");
      })
      .catch(err => next(err));
  } else {
    req.session.reservationId = resaId;
    req.session.city = cityName;
    // redirect to the sign up page if you ARE NOT logged-in
    req.flash("error", "Signup to create your itinerary");
    res.redirect("/signup");
  }
});

// Summary of user order
router.get("/summary", (req, res, next) => {
  res.render("resa-views/resa-summary.hbs");
});

router.post("/process-summary", (req, res, next) => {
  const { itineraries } = req.body;
  Busline.find({ "cities._id": { $in: itineraries } })
    .then(lines => {
      // res.json(lines);

      lines.forEach(oneLine => {
        oneLine.cities = oneLine.cities.filter(oneCity => {
          // convert ID to string because its not really string
          return itineraries.includes(oneCity._id.toString());
        });
      });

      // Creating calculation Total Price of the trip
      var tripLength = lines[0].cities.length;
      var tripCost = tripLength * 99;

      res.locals.cost = tripCost;
      res.locals.lineArray = lines;
      res.render("resa-views/resa-summary.hbs");
      // res.json(lines);
    })
    .catch(err => next(err));
});

// submit registration and payment form (last form)

router.get("/registration", (req, res, next) => {
  res.render("resa-views/final-page.hbs");
});
router.post("/process-registration", (req, res, next) => {
  // const { }
  res.render("resa-views/final-page.hbs");
});

module.exports = router;
