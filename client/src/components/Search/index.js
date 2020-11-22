import React from 'react';
import useStyles from './styles';
import { Paper, InputBase, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ handleSearchChange }) => {
  const classes = useStyles();

  const handleSeach = (e) => {
    e.preventDefault();
    document.getElementById("searchBar").value = "";
    handleSearchChange("");
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        id="searchBar"
        className={classes.input}
        placeholder="Search Recipes"
        inputProps={{ 'aria-label': 'search secipes' }}
        onChange={(e) => {handleSearchChange(e.target.value)}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={handleSeach}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
