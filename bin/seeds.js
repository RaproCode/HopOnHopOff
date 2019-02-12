// connects seed.js to the .env file
require("dotenv").config();

const mongoose = require("mongoose");

// get the user model to do our database query
const DEPARTURE = require("../models/city-models.js");

mongoose
  .connect("mongodb://localhost/hoponhop", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const departureCities = [
  {
    city: "Paris",
    flag: "/images/flags/france-flag.jpg",
    time: "09.00",
    geolocation: "48.856788, 2.351077"
  },
  {
    city: "Luxembourg",
    flag: "/images/flags/luxembourg-flag.jpg",
    time: "09.00",
    geolocation: "49.612151, 6.137464"
  },
  {
    city: "Frankfurt",
    flag: "/images/flags/german-flag.jpg",
    time: "09.00",
    geolocation: "50.106171, 8.664951"
  },
  {
    city: "Amsterdam",
    flag: "/images/flags/netherlands-flag.jpg",
    time: "09.00",
    geolocation: "52.378522, 4.897025"
  },
  {
    city: "Prague",
    flag: "/images/flags/czech-flag.jpg",
    time: "09.00",
    geolocation: "50.087113, 14.417726"
  },
  {
    city: "Budapest",
    flag: "/images/flags/hungary-flag.jpg",
    time: "09.00",
    geolocation: "47.503823, 19.044939"
  },
  {
    city: "Vienna",
    flag: "/images/flags/austria-flag.jpg",
    time: "09.00",
    geolocation: "48.209819, 16.360785"
  },
  {
    city: "Zurich",
    flag: "/images/flags/switzerland-flag.jpg",
    time: "09.00",
    geolocation: "47.366122, 8.541175"
  }
];

DEPARTURE.insertMany(departureCities)
  .then(cityResult => {
    console.log(`Inserted $(cityResult.length} CITY)`);
  })
  .catch(err => {
    console.log("Insert FAILURE!!", err);
  });

module.exports = departureCities;
