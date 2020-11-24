import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, CircularProgress, Divider } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Recipe from '../../Recipes/Recipe/Recipe';

const HighestRating = ({ setCurrentId, showModal }) => {
  const recipes = useSelector((state) => state.recipes);

  recipes.sort(function(a, b) {
    return b.rating - a.rating;
  });

  return (
    !recipes.length ? <CircularProgress /> : (
      <>
        <div className="rating-title-wrapper">
          <h1 className="rating-title">Highest Rating</h1><Link to="/"><small className="rating-viewmore">view more</small></Link>
        </div>
        <Divider className="ratings-divider" variant="middle" />
        <Grid className="grid-helper" container alignItems="stretch" spacing={2}>
          {recipes.map((recipe) => {
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

export default HighestRating