import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { List, Form, Search } from '../../components';

import { getRecipes } from '../../actions/recipes';
import { useDispatch } from 'react-redux';

const Recipes = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  const handleSearchChange = (e) => {
    setFilter(e);
  }

  return (
    <>
      <Container className="container" maxWidth="lg">
        <Search handleSearchChange={handleSearchChange} />
      </Container>
      <Container maxWidth="lg">
        <List setCurrentId={setCurrentId} filter={filter} />
        <Form  currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </>
  )
}

export default Recipes
