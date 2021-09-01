import Product from "./Product/Product"
import React from "react";
import {Grid } from "@material-ui/core";
import useStyles from './styles';

const Products =  ({products, onAddToCart}) => {
    const classes = useStyles();
    
    return (
<main className="classes.content">
<div className="classes.toolbar" />

<Grid container justify="center" style={{marginTop:'60px'}} spacing={4} cols={3} >
    
        {products.map((product) => (
          <Grid className={classes.avatar} key={product.id} item xs={12} sm={6} md={3}>
            <Product product= {product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
    </Grid>
</main>);
}
export default Products;