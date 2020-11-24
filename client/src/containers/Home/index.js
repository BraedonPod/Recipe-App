import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { Form, NewestRating, HighestRating, FavRating } from '../../components';

import { getRecipes } from '../../actions/recipes';
import { useDispatch } from 'react-redux';


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  return (
      <>
        <Container maxWidth="lg">
          <HighestRating setCurrentId={setCurrentId} />
          <NewestRating setCurrentId={setCurrentId} />
          <FavRating setCurrentId={setCurrentId} />
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Container>
      </>
  )
}

export default Home
