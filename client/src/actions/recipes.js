import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch(error) {
    console.log(error);
  }
}

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({ type: CREATE, payload: data });
  } catch(error) {
    console.log(error);
  }
}

export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
}