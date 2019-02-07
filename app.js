const express = require("express");
const mongoose = require("mongoose");

// connect to the database defined by this CONNECTION STRING
// (Domain, port, database name, password, all info about the database server )
mongoose.connect("mongodb://localhost/NomCollection");

const app = express();

app.listen(5555, () => {
  console.log("HopOnHop server READY !");
});

app.use(express.static(__dirname + " /public"));

app.set("view engine", "hbs");
