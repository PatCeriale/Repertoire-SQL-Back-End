module.exports = function (sequelize, DataTypes) {
  var Recipe = sequelize.define("Recipe", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    author: {
      type: DataTypes.STRING,
    },
    prepTime: {
      type: DataTypes.STRING,
    },
    cookTime: {
      type: DataTypes.STRING,
    },
    servingSize: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    course: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: "TIMESTAMP",
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
  });

  // Recipe.associate = function (models) {
  //   Recipe.hasMany(models.Ingredients);
  //   Recipe.hasMany(models.Instructions);
  // };
  return Recipe;
};
