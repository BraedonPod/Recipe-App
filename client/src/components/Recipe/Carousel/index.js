import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import useStyles from './styles';
import cx from 'classnames';

const CarouselRecipe = ({ images }) => {
  const classes = useStyles();

  return (
    <Carousel className={classes.carousel}>
      <Carousel.Item interval={1000}>
        <img
          className={cx(classes.w100, classes.imgBlock)}
          src={images || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselRecipe
