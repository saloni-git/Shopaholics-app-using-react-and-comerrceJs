import React from "react";
import useStyles from "./styles"
import {Typography, Card, Button, CardActions, CardMedia, CardContent} from "@material-ui/core";
const CardItem = ({item, OnUpadteCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
return (
    <Card>
   <CardMedia image={item.media.source} alt={item.name} className={classes.media} />

<CardContent className={classes.cardContent}>
    <Typography variant="h5">{item.name}</Typography>
    <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
</CardContent>
<CardActions className={classes.CardActions} style={{justifyContent:'center'}}>
    <div className={classes.buttons}>
        <Button type="button" size="small" onClick ={ ()=> OnUpadteCartQty(item.id, item.quantity-1)}>-</Button>
        <Typography>{item.quantity} </Typography>
        <Button type="button" size="small" onClick ={ ()=> OnUpadteCartQty(item.id, item.quantity+1)}>+</Button>
    </div>
    
</CardActions>
    </Card>
)
}
export default CardItem;