const express = require('express');
const router = express.Router();
const { validateToken } = require('../authUtils');
const {
  getAllRecipes, addRecipe, updateRecipe, deleteRecipe,
  getRecipeById, getRecipesByUserId
} = require('../controllers/recipeController');

router.get('/', getAllRecipes);
router.post('/', validateToken, addRecipe);
router.put('/:id', validateToken, updateRecipe);
router.delete('/:id', validateToken, deleteRecipe);
router.get('/:id', getRecipeById);
router.post('/user', getRecipesByUserId);

module.exports = router;

