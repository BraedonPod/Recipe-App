import React from 'react';
import useStyles from './styles';
import { List, ListItem, ListItemText, Paper, Divider } from '@material-ui/core';

const Directions = ({ directions }) => {
  const classes = useStyles();

  return (
    <>
      <h1>Directions</h1>
      <Divider variant="middle" />
      <List dense>
      { directions.split('\n').map((step, index) => {
        if(step !== "")
          return (
            <ListItem key={index}>
              <Paper className={classes.paper} elevation={2}>
              <ListItemText primary={step} />
              </Paper>
            </ListItem>
          )
      })}
      </List>
    </>
  )
}

export default Directions
