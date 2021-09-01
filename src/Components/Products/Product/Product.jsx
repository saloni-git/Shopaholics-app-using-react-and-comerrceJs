import {Card,CardContent,CardActions,CardMedia,Typography,IconButton  } from '@material-ui/core';

import {AddShoppingCart} from "@material-ui/icons"

import React from "react";
import useStyles from './styles';
import "./style.css";

const Product = ({ product , onAddToCart }) => {
  const classes = useStyles();


  return (

    <Card className="card" className={classes.root} noWrap>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h3">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h3">
            Rs.{product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }}  color="textSecondary" component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart" onClick= {() => onAddToCart(product.id,1)} >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;