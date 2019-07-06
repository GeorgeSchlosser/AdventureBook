
var db = require("../models");

module.exports = function(app) {
  // Get games won
  app.get("/api/wins", function(req, res) {
    db.wins.count({
      where: {
        games_won: 0
      }
    }).then(function(count) {
        res.json(count)
    });
  });

  // Game win event pushes new row to games_won table
  app.post("/api/wins", function(req, res) {
    console.log("New winner!");
    console.log(req.body);
    db.wins.create({
      games_won: 0
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all users
  app.get("/api/all", function(req, res) {
    db.users.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a returning user
  app.get("/api/users/:user", function(req, res) {
    db.users.findOne({
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
    db.users.findOne({
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
    db.users.create({
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

