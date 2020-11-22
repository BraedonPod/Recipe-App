import React from 'react';
import { Typography, Breadcrumbs } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
      <Typography color="textPrimary">{ title }</Typography>
    </Breadcrumbs>
  )
}

export default Breadcrumb
