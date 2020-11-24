import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { List, Modal, Search } from '../../components';

import { getRecipes } from '../../actions/recipes';
import { useDispatch } from 'react-redux';

const Recipes = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  const handleSearchChange = (e) => {
    setFilter(e);
  }

  const showModal = () => { setOpen(true); }
  const closeModal = () => { setOpen(false); setCurrentId(0); }

  return (
    <>
      <Container className="container" maxWidth="lg">
        <Search handleSearchChange={handleSearchChange} />
      </Container>
      <Container maxWidth="lg">
        <List setCurrentId={setCurrentId} filter={filter} showModal={showModal} />
        <Modal open={open} closeModal={closeModal} currentId={currentId} setCurrentId={setCurrentId} />
      </Container>
    </>
  )
}

export default Recipes
