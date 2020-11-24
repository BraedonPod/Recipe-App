import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from './Recipe/Recipe';

const List = ({ setCurrentId, filter }) => {
  const recipes = useSelector((state) => state.recipes);

  return (
    !recipes.length ? <CircularProgress /> : (
      <Grid container alignItems="stretch" spacing={2}>
        {recipes.map((recipe) => {
          if(recipe.title.toLowerCase().match(filter.toLowerCase()))
            return (
              <Grid key={recipe.id} item xs={12} md={4}>
                <Recipe recipe={recipe} setCurrentId={setCurrentId} />
              </Grid>
            )
        })}
      </Grid>
    )
  )
}

export default List
