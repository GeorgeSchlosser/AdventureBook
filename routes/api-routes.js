
var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/all", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a returning user
  app.get("/api/users/:user", function(req, res) {
    db.User.findOne({
      where: {
        user_name:req.params.user_name,
        password: req.params.password
      }
    }).then(function(results) {
      console.log("login: " + results)
      res.json(results);
    });
  });

  app.get("/api/users", function(req, res) {
    db.User.findOne({
      where: {
        user_name:req.body.user_name
      }
    }).then(function(results) {
      console.log("login: " + results)
      res.json(results);
    });
  });

  // Add a user
  app.post("/api/new", function(req, res) {
    console.log("User Data:");
    console.log(req.body);
    db.User.create({
      user_name: req.body.user_name,
      password: req.body.password
    }).then(function(results) {
      res.json(results);
    });
  });
};
  
// Possibly have the ability to delete a user
  // // Delete a user
  // app.delete("/api/users/:id", function(req, res) {
  //   console.log("User ID:");
  //   console.log(req.params.id);
  //   User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function() {
  //     res.end();
  //   });
  // });

