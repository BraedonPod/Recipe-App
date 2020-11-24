const express = require('express');

const { getRecipe, getRecipes, createRecipe, updateRecipe, likeRecipe }  = require('../controllers/recipes');

const router = express.Router();

router.get('/', (req, res) => { getRecipes(req, res); });

router.post('/', (req, res) => { createRecipe(req, res); });

router.patch('/:id', (req, res) => { updateRecipe(req, res); });

router.patch('/:id/favRecipe', (req, res) => { likeRecipe(req, res); });

router.get('/:id', (req, res) => { getRecipe(req, res); });

module.exports = router;