require("dotenv").config();
var express = require("express");
// var exphbs = require("express-handlebars");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
// var db = require("./models");
//env
// require('dotenv').load();

var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// For Passport
app.use(
  // hashing session cookies prevents user alteration
  session({ secret: 'worth-it', resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require('./models');

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
//Routes
require('./routes/auth.js')(app, passport, models);

//load passport strategies
require('./config/passport/passport.js')(passport, models);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });

//Sync Database
models.sequelize
  .sync(syncOptions)
  .then(function() {
    app.listen(PORT, function() {
      console.log(
        '==>  Listening on port %s. Visit http://localhost:%s/ in your browser.',
        PORT,
        PORT
      );
    });
    console.log('Nice! Database looks fine');
  })
  .catch(function(err) {
    console.log(err, 'Something went wrong with the Database Update!');
  });

module.exports = app;
