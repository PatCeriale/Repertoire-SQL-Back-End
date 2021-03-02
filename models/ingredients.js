module.exports = function (sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredient", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });

  Ingredients.associate = function (models) {
    Ingredients.belongsTo(models.Recipe, {
      foreignKey: {
        //TODO: Change back to false before deployment
        allowNull: true,
      },
    });
  };
  return Ingredients;
};
