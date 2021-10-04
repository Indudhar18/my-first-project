import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class About extends Component {
    render(){
        return(
            <div>
            <h1>Welcome to about page</h1>
            <NavLink to = "/contact-us">contactpage</NavLink>
            </div>
        )
        

    }
}

export default About;