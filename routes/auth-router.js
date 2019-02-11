const express = require("express");
const bcryptjs = require("bcryptjs");

const User = require("../models/user-models.js");
const Resa = require("../models/resa-models.js");
const router = express.Router();

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

  if (!originalPassword || originalPassword.match(/[0-9]/)) {
    req.flash("Error", "Password must countain min 6 characters and 1 number ");

    res.redirect("/signup");

    return;
  }
  // // Password and Confirmation password
  // if (originalPassword != passwordConfirmation) {
  //   req.flash(
  //     "Error",
  //     "The password and Confirmation password fiels must match",
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

      // redirect to the HOME PAGE
      res.redirect("/");
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
      res.locals.resaItem = resaDoc;
      res.render("resa-views/resa-result.hbs");
    })
    .catch(err => next(err));
});

// router.get("/resa-result", (req, res, next) => {
//   // Resa.find().then().catch()
//   res.render("resa-views/resa-result.hbs");
// });
module.exports = router;
