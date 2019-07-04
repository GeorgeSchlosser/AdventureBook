module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("users", {        
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_name: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [4]
        },
      },
    currentLocation: DataTypes.STRING,  
});
  return User;
};