module.exports = function (sequelize, DataTypes) {
  var Instructions = sequelize.define("Instruction", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    step: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  Instructions.associate = function (models) {
    Instructions.belongsTo(models.Recipe, {
      foreignKey: {
        //TODO: Change back to false before deployment
        allowNull: true,
      },
    });
  };
  return Instructions;
};
