import React, {Component} from "react";
import axios from "axios";

class Sent extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: '',
            job:''

        }
    }

    onHandle =(event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    onSubmit(){
        const url ="https://reqres.in/api/users"
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
            <div>
                <h1>Welcome to Sent items</h1>
                <div className="bottom-space">
                    <label className="lable-Text">Enter your name:</label>
                    <input type ="text" placeholder="enter the name.." className="input-space" onChange={this.onHandle} name ="name"></input>
                </div>
                <div className="bottom-space">
                    <label className="lable-Text">Enter your job disc:</label>
                    <input type ="text" placeholder="enter the job.." className="input-space" onChange={this.onHandle} name ="job"></input> 
                </div>
                <button onClick={()=>this.onSubmit()}>submit</button>
                </div>
          
        )
    }
}

export default Sent;