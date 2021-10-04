import React, {Component} from "react";
import axios from "axios";
import { render } from "react-dom";

class Assign extends Component {

    constructor(props){
        super(props);
        this.state ={
            first_name: '',
            last_name:'',
            email:'',
            address1:'',
            address2:''

        }
    }

    onSub =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit(){
        const url ="https://concord-test.herokuapp.com/api/register"
        axios.post(url,this.state)
        .then((response)=>{
            const serverData = response.data;
            console.log(serverData);
        })

        .catch((error)=>{
            console.log(error);

        })
    }

    render(){
        return(
            <div className="main1"> <button onClick={()=>this.onSubmit()}>Create Account</button>
                <div className="one1">
                    <h1>Create a new Account</h1>
                    <label>First Name:</label>
                    <input type ="text" placeholder="Enter first name"onChange={this.onSub} name="first_name"></input>
                    <label>Last Name:</label>
                    <input type ="text" placeholder="Enter last name"onChange={this.onSub} name="last_name"></input>
                    <br/>
                    <label>Email ID:</label>
                    <input type ="text" placeholder="Enter email id"onChange={this.onSub} name="email"></input>
                    <br/>
                    <p>Address</p>
                    <br/>
                    <label>Address 1:</label>
                    <input type ="text" placeholder="Enter address 1"onChange={this.onSub} name="address1"></input>
                    <label>Address 2:</label>
                    <input type ="text" placeholder="Enter address 1"onChange={this.onSub} name="address2"></input>
    

                </div>
                
            </div>
        )
    }
    
    

}

export default Assign;


