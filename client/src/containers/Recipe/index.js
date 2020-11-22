import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Divider, Typography } from '@material-ui/core';
import { Container } from '@material-ui/core';
import * as api from '../../api';
import { Breadcrumb, Ingredients, Directions, Carousel } from '../../components';

const Recipe = ({ match }) => {
  const { id } = match.params;
  const stateRecipe = useSelector((state) => state.recipes.find((r) => r.id === parseInt(id)));
  const [recipe, setRecipe] = useState(stateRecipe);
  
  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await api.fetchRecipe(id);
      setRecipe(data);
    }
    fetchAPI();
  }, [id]);

  if (!recipe) {
    return (
      <section>
        <h2>Recipe not found!</h2>
      </section>
    )
  }

  return (
      <Container maxWidth="lg">
        <Breadcrumb title={recipe.title} />
        <section>
          <Carousel images={recipe.image} />
          <article>
            <h2>{recipe.title}</h2>
            <Divider variant="middle" />
            <Typography className="description" variant="body1" component="p">{recipe.description}</Typography>
            <Ingredients ingredients={recipe.ingredients} />
            <Directions directions={recipe.directions} />
          </article>
        </section>
      </Container>
  )
}

export default Recipe
