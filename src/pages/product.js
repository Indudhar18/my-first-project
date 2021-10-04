import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Product extends Component {
    render(){
        return(
            <div>
            <h1>Welcome to Product page</h1>
            <NavLink to = "/home">click here for main page</NavLink>
            </div>

        )
        

    }
}

export default Product;