
var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var User = sequelize.define('users', {        
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: Sequelize.STRING,
        // validate: {
        //   isUnique: function(value, next) {
        //     User.find({
        //       where: {user_name: value},
        //       attributes: ["id"]
        //     })
        //     .done(function(err, user) {
        //       if (err) {
        //       return next(err);
        //     }
        //     if (user) {
        //       return next("User name already in use")
        //     }
        //       next()
        //     });
        //   }
        // }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          len: [4]
        },
      },
    currentLocation: Sequelize.STRING,  
});

User.sync();

module.exports = User