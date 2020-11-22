import React from 'react';
import useStyles from './styles';
import { List, ListItem, ListItemIcon, ListItemText, Checkbox, Divider } from '@material-ui/core';


const Ingredients = ({ ingredients }) => {
  const steps = ingredients.split('\n');
  const [checked, setChecked] = React.useState([]);
  const classes = useStyles();
  
  const handleToggle = (index) => () => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <>
      <h1>Ingredients</h1>
      <Divider variant="middle" />
      <List>
        {steps.map((step, index) => {
          if(step !== "")
            return (
              <ListItem className={checked.indexOf(index) !== -1 ? classes.isChecked : classes.notChecked} key={index} dense button onClick={handleToggle(index)}>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    color='primary'
                    checked={checked.indexOf(index) !== -1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': index }}
                  />
                </ListItemIcon>
                <ListItemText primary={step} />
              </ListItem>
            );
        })}
      </List>
    </>
  )
}

export default Ingredients
