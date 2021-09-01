import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography} from "@material-ui/core"
import {Link , useLocation} from "react-router-dom";
import {ShoppingCart} from "@material-ui/icons"
import logo from "../../Images/logo2.png"
import useStyles from './styles';
const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const loc = useLocation();
    return (
        <>
        <AppBar position="fixed" className="classes.appBar" color="primary">
        <Toolbar>
            <Typography component={Link} to="/" variant="h6"  className="classes.title" color="inherit">
                <img src={logo} alt="Commerce.js" height="25px" className="classes.image"/>
                  Shopaholics
            </Typography>
            <div className="classes.grow"/>
            {loc.pathname==='/' && (
            <div className={classes.button}>
            
            <IconButton aria-label="Show cart" component={Link} to="/cart" aria-hidden="true" color="inherit"  float="right">
                <Badge badgeContent={totalItems} color="secondary">
                    <ShoppingCart/>
                </Badge>
            </IconButton>
            
            </div>)}

        </Toolbar>

        </AppBar>
        </>
    )
}
export default Navbar;