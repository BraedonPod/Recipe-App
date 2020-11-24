import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, CardActions } from '@material-ui/core';
import { MoreHoriz, Favorite, Star } from '@material-ui/icons/';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { favRecipe } from '../../../actions/recipes';
import useStyles from './styles';

const Recipe = ({ recipe, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={recipe.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={recipe.title} />
      <div className={classes.overlay}>
        <Typography variant="body2">{moment(recipe.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {setCurrentId(recipe.id)}}><MoreHoriz fontSize="default" /></Button>
      </div>
      <Typography className={classes.title} variant="h5" component="h2">{recipe.title}</Typography>
      <div className={classes.starOverlay}>{recipe.rating} <Star /></div>
      <div className={classes.details}>
        {recipe.tags  ? (
          <Typography variant="body2" color="textSecondary" component="h3">{recipe.tags.split(', ').map((tag) => ` #${tag} `)}</Typography>
        ) : <Typography variant="body2" color="textSecondary" component="h3">No Tags</Typography>
        }
      </div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{recipe.description.slice(0, 100)}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Link to={`/recipe/${recipe.id}`}><Button variant="outlined" size="small" color="primary">View Recipe</Button></Link>
        <Button variant="outlined" size="small" className={recipe.fav ? classes.favBtn : classes.notfavBtn} onClick={() => dispatch(favRecipe(recipe.id))}><Favorite fontSize="small" /> Fav</Button>
      </CardActions>
    </Card>
  )
}

export default Recipe
