import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import { NewestRating, HighestRating, FavRating, Modal } from '../../components';

import { getRecipes } from '../../actions/recipes';
import { useDispatch } from 'react-redux';


const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  const showModal = () => { setOpen(true); }
  const closeModal = () => { setOpen(false); setCurrentId(0); }

  return (
      <>
        <Container maxWidth="lg">
          <HighestRating setCurrentId={setCurrentId} showModal={showModal} />
          <NewestRating setCurrentId={setCurrentId} showModal={showModal} />
          <FavRating setCurrentId={setCurrentId} showModal={showModal} />
          <Modal open={open} closeModal={closeModal} currentId={currentId} setCurrentId={setCurrentId} />
        </Container>
      </>
  )
}

export default Home
