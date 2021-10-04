import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            <div>
            <h1>Welcome to home page</h1>
            <NavLink to="/about-us">About</NavLink>
            <br/>
            <NavLink to="/contact-us">Contact</NavLink>
            <br/>
            <NavLink to="/product">product</NavLink>

            </div>

        )
        

    }
}

export default Home;