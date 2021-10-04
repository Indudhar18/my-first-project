import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Contact extends Component {
    render(){
        return(
            <div>
            <h1>Welcome to contact page</h1>
            <NavLink to = "/product">product page</NavLink>
            </div>

        )
        

    }
}

export default Contact;