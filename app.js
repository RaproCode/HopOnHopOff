require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");

require("./config/passport-setup.js");
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);

// Partials connections
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// make our Express app create SESSIONS
app.use(
  session({
    // saveUninitialized & resave are just to avoid warning messages
    saveUninitialized: true,
    resave: true,
    // secret should be a string that's different for every app
    secret: process.env.SESSION_SECRET,
    // Store our session data inside our MongoDB with the "connect-mongo" package
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());

app.use(passport.session());
app.use(flash());

// app.use() defines our own MIDDLEWAR function
app.use((req, res, next) => {
  // send  messages to the hbs file for every pages
  //(req.flash() comes from the "connect-flash" npm package)
  res.locals.messages = req.flash();

  // send the logged-in user's info to hbs files for ALL pages
  // (req.user is defined by Passport and contains the logged-in user's info)
  res.locals.currentUser = req.user;
  // Tell Express we are ready to move to the routes now
  // (You need this or your pages will stay loading forever)
  next();
});

// default value for title local
app.locals.title = "Hop On Hop Off";

const index = require("./routes/index");
app.use("/", index);

const auth = require("./routes/auth-router.js");
app.use("/", auth);

const resa = require("./routes/resa-router.js");
app.use("/", resa);

module.exports = app;
