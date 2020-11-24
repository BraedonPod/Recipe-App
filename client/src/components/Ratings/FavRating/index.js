import React from 'react';
import { Grid, CircularProgress, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from '../../Recipes/Recipe/Recipe';

const FavRating = ({ setCurrentId, showModal }) => {
  const recipes = useSelector((state) => state.recipes);

  return (
    !recipes.length ? <CircularProgress /> : (
      <>
        <h1>Favorites</h1>
        <Divider className="ratings-divider" variant="middle" />
        <Grid className="grid-helper" container alignItems="stretch" spacing={2}>
          {recipes.map((recipe) => {
            if(recipe.fav)
              return (
                <Grid key={recipe.id} item xs={12} md={3}>
                  <Recipe recipe={recipe} setCurrentId={setCurrentId} showModal={showModal} />
                </Grid>
              )
          })}
        </Grid>
      </>
    )
  )
}

export default FavRating