import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createRecipe, updateRecipe } from '../../actions/recipes';


const Form = ({ currentId, setCurrentId }) => {
  const [recipeData, setRecipeData] = useState({ title: '', description: '', ingredients: '', directions: '', info: '', image: '', rating: '', tags: '' });
  const recipe = useSelector((state) => currentId ? state.recipes.find((r) => r.id === currentId) : null);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if(recipe) setRecipeData(recipe);
  }, [recipe]);

  const clear = () => {
    setCurrentId(0);
    setRecipeData({ title: '', description: '', ingredients: '', directions: '', info: '', image: '', rating: '', tags: '' });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId === 0) {
      dispatch(createRecipe(recipeData));
      clear();
    } else {
      dispatch(updateRecipe(currentId, recipeData));
      clear();
    }
  }

  return (
    <Paper className={classes.paper} >
      <form className={`${classes.root} ${classes.form}`} autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${recipe.title}"` : 'Add a recipe'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={recipeData.title} onChange={(e) => setRecipeData({...recipeData, title: e.target.value })} />
        <TextField name="description" variant="outlined" label="Desciption" fullWidth multiline rows={2} value={recipeData.description} onChange={(e) => setRecipeData({...recipeData, description: e.target.value })} />
        <TextField name="ingredients" variant="outlined" label="Ingredients" fullWidth multiline rows={10} value={recipeData.ingredients} onChange={(e) => setRecipeData({...recipeData, ingredients: e.target.value })} />
        <TextField name="directions" variant="outlined" label="Directions" fullWidth multiline rows={10} value={recipeData.directions} onChange={(e) => setRecipeData({...recipeData, directions: e.target.value })} />
        <TextField name="info" variant="outlined" label="Info" fullWidth multiline rows={2} value={recipeData.info} onChange={(e) => setRecipeData({...recipeData, info: e.target.value })} />
        <FormControl variant="outlined" fullWidth className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select value={recipeData.rating} onChange={(e) => setRecipeData({...recipeData, rating: e.target.value })} label="Rating">
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={recipeData.tags} onChange={(e) => setRecipeData({ ...recipeData, tags: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setRecipeData({ ...recipeData, image: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
