module.exports = function(sequelize, DataTypes) {
    var Wins = sequelize.define("wins", {        
      games_won: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0
      }
    });
    return Wins;
  };