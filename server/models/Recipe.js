const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const Recipe = db.define('recipes', {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  ingredients: { type: DataTypes.TEXT, allowNull: false },
  directions: { type: DataTypes.TEXT, allowNull: false },
  info: { type: DataTypes.TEXT, allowNull: true },
  tags: { type: DataTypes.STRING, allowNull: true },
  image: { type: DataTypes.TEXT, allowNull: true },
  rating: { type: DataTypes.DECIMAL(2, 2) , allowNull: true },
  fav: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

module.exports = Recipe;