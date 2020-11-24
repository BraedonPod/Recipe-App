const express = require('express');
const Recipe = require('../models/Recipe');

const router = express.Router();

var getRecipes = async function (req, res) {
  await Recipe.findAll()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(404).json({ message: err.message }));
}

var getRecipe = async function (req, res) {
  const { id } = req.params;

  await Recipe.findByPk(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(404).json({ message: err.message }));
}

var createRecipe = async function (req, res) {
  const { title, description, ingredients ,directions, info, image, rating, tags } = req.body;
  await Recipe.create({title, description, ingredients ,directions, info, image, rating, tags})
  .then(recipe => {
    res.status(201).json(recipe);
  })
  .catch(err => res.status(409).json({ message: err.message }));
}

var updateRecipe = async function (req, res) {
  const { id } = req.params;
  const { title, description, ingredients ,directions, info, image, rating, tags } = req.body;
  
  await Recipe.update({title, description, ingredients ,directions, info, image, rating, tags}, {where: { id: id }});
  await Recipe.findByPk(id)
    .then(recipe => {
      res.json(recipe);
    });
}

var likeRecipe = async function (req, res) {
  const { id } = req.params;
  const data = await Recipe.findByPk(id);
  await Recipe.update({fav: !data.fav}, {where: { id: id }});
  const updatedData = await Recipe.findByPk(id);
  res.json(updatedData);
}

module.exports = { router, getRecipe, getRecipes, createRecipe, updateRecipe, likeRecipe };