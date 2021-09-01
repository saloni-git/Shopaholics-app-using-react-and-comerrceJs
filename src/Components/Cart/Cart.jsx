import React from "react";
import useStyles from "./styles"
import CardItem from "./CardItem/CardItem";
import {Link} from "react-router-dom";
import {Container,Typography, Button, Grid} from "@material-ui/core"
import { CardTravel } from "@material-ui/icons";
const Cart = ({cart, OnUpadteCartQty, onRemoveFromCart, OnEmptyCart }) => {
const classes = useStyles();

 const EmptyCart = () => (
     <Typography variant="subtitle1"> Your Cart is empty! 
     <Link to="/" className={classes.link}>Add itmes</Link>
     </Typography>
 )
 const handleEmptyCart = () => OnEmptyCart();
 
 const FilledCart = () => (
     <>
     <Grid container spacing={3} style={{paddingTop:"20px"}}>
{
    cart.line_items.map( (item) => (
        <Grid item  xs= {12} sm ={4} key ={item.id}>
            <CardItem item ={item}  OnUpadteCartQty={OnUpadteCartQty} onRemoveFromCart={onRemoveFromCart}/>
         
        </Grid>
    ))
    
}

     </Grid>
     <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
     </>
 )
 

if(cart && !cart.line_items)return (<h1>loading...</h1>);
 
    return (
        <Container>
            <div className="classes.toolbar"/>
            <Typography className={classes.title} variant="h3" gutterBottom > Shopping Cart </Typography>
            {( (cart && cart.total_unique_itmes==0) || cart===undefined) ? <EmptyCart/>: <FilledCart/>} 
        </Container>
    )
}
export default Cart;