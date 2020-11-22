import React from 'react';
import { Grid, CircularProgress, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from '../../Recipes/Recipe/Recipe';

const NewestRating = ({ setCurrentId }) => {
  const recipes = useSelector((state) => state.recipes);

  recipes.sort(function(a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  return (
    !recipes.length ? <CircularProgress /> : (
      <>
        <h1>Newest</h1>
        <Divider className="ratings-divider" variant="middle" />
        <Grid className="grid-helper" container alignItems="stretch" spacing={2}>
          {recipes.map((recipe) => {
            return (
              <Grid key={recipe.id} item xs={12} sm={3}>
                <Recipe recipe={recipe} setCurrentId={setCurrentId} />
              </Grid>
            )
          })}
        </Grid>
      </>
    )
  )
}

export default NewestRating
