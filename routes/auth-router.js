const express = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user-models.js");
const Resa = require("../models/resa-models.js");
const City = require("../models/city-models.js");
const router = express.Router();

// SIGNUP SECTION
router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

router.post("/process-signup", (req, res, next) => {
  const {
    lastName,
    firstName,
    email,
    originalPassword
    // passwordConfirmation
  } = req.body;

  if (!originalPassword || !originalPassword.match(/[0-9]/)) {
    req.flash("Error", "Password must countain min 6 characters and 1 number ");

    res.redirect("/signup");

    return;
  }
  // // Password and Confirmation password
  // if (originalPassword != passwordConfirmation) {
  //   req.flash(
  //     "Error",
  //     "The password and Confirmation password fields must match",
  //     "Please enter the same information in both field"
  //   );

  //   // Must be redirect or can we stay on the page with the flash message ??
  //   req.redirect("/");
  // }

  // Encrypt the user's password before saving
  const encryptedPassword = bcryptjs.hashSync(originalPassword, 10);

  User.create({ lastName, firstName, email, encryptedPassword })
    .then(() => {
      req.flash("Congratulation your account is create!!");
      // if (req.user) {
      //   // AUTHORIZATION: only show the form if you are logged-in
      //   res.render("room-views/room-form.hbs");
      // } else {
      //   // redirect to the login page if you ARE NOT logged-in
      //   req.flash("error", "You have to be logged-in to add a room. 🛌");
      //   res.redirect("/login");
      // }
      // redirect to the HOME PAGE
      res.redirect("/");
    })
    .catch(err => next(err));
});

router.get("/login", (req, res, next) => {
  res.render("auth-views/log-in-form.hbs");
});

router.post("/process-logIn", (req, res, next) => {
  const { email, originalPassword } = req.body;

  User.findOne({ email: { $eq: email } })
    .then(userDoc => {
      if (!userDoc) {
        req.flash("Error", "Email is incorrect");

        res.redirect("/login");
        return;
      }
      const { encryptedPassword } = userDoc;

      if (!bcryptjs.compareSync(originalPassword, encryptedPassword)) {
        req.flash("Error", "Password is incorrect");

        res.redirect("/login");

        return;
      }

      req.logIn(userDoc, () => {
        req.flash("Success", "Welcome back!");
        res.redirect("/");
      });
    })
    .catch(err => next(err));
});

router.get("/resa", (req, res, next) => {
  res.render("resa-views/resa-result.hbs");
});

router.post("/process-resa", (req, res, next) => {
  const { departureDate, duration, quantity } = req.body;
  Resa.create({ departureDate, duration, quantity })
    .then(resaDoc => {
      res.redirect(`/resa/${resaDoc._id}`);
    })
    .catch(err => next(err));
});

router.get("/resa/:resaId", (req, res, next) => {
  const { resaId } = req.params;
  Resa.findById(resaId)
    .then(resaDoc => {
      console.log(resaDoc);
      res.locals.resaItem = resaDoc;

      City.find()
        .then(cityResults => {
          console.log(cityResults, "ggygygygygygyggygyggygy");
          res.locals.cityArray = cityResults;
          res.render("resa-views/resa-result.hbs");
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

router.get("/logout", (req, res, next) => {
  //req.logOut() is a Pssport method that removes the USER ID from the session
  req.logOut();

  req.flash("Success", "Logged out successfuly!!");
  res.redirect("/");
});

// router.get("/resa-result", (req, res, next) => {
//   // Resa.find().then().catch()
//   res.render("resa-views/resa-result.hbs");
// });
module.exports = router;
