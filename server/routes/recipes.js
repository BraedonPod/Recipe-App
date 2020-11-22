const express = require('express');
const db = require('../config/db');
const Recipe = require('../models/Recipe');

const router = express.Router();

router.get('/', (req, res) => {
  Recipe.findAll()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(404).json({ message: err.message }));
});

router.post('/', (req, res) => {
  const { title, description, ingredients ,directions, info, image, rating, tags } = req.body;
  Recipe.create({title, description, ingredients ,directions, info, image, rating, tags})
  .then(recipe => {
    res.status(201).json(recipe);
  })
  .catch(err => res.status(404).json({ message: err.message }));
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, ingredients ,directions, info, image, rating, tags } = req.body;
  
  Recipe.update({title, description, ingredients ,directions, info, image, rating, tags}, {where: { id: id }})
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipe.findByPk(id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(404).json({ message: err.message }));
});

module.exports = router;