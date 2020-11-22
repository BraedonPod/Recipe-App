import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';

export default (recipes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...recipes, action.payload];
    case UPDATE:
      return recipes.map((recipe) => (recipe.id === action.payload.id ? action.payload : recipe));
    default:
      return recipes;
  }
};