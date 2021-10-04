import React,{Component} from "react";

class Register extends Component{

    constructor(props){
        super(props)
        this.state ={
            first_name:'',
            last_name:'',
            email_id:'',
            gender:'',
            dob:'',
            address:'',
            city:'',
            visible: true,
            password: false
        }
    }

    onEvent = (event)=> {

        this.setState({
            [event.target.name] : event.target.value
        })
        
    }
    onCreate() {
        console.log(this.state);
    }

    showImage(){
        this.setState({
            visible: true
        })

    }

    hideImage(){
        this.setState({
            visible:false
        })

    }
    hideOrShow(){
        this.setState({
            visible:!this.state.visible
        })
    }
    hideShowPassword(status){
        this.setState({
            password:status
        })
    }




    render(){

        let student_name = "indudhar";
        return(
            
            
            <div>
                <h1>register page</h1>

                <button onClick={()=>this.showImage()}>show image</button>
                <button onClick={()=>this.hideImage()}>hide image</button>
                <button onClick={()=>this.hideOrShow()}>hide or show</button>


                
                {this.state.visible && <div><img src={require("../myproject/pexels-pok-rie-2017299.jpg").default} style = {{height:135}}/></div>}


                <div>
                    <label>Enter First Name:</label>
                    <input type="text" placeholder="Please enter the first name" onChange={this.onEvent} name ="first_name"></input>
                </div>
                <div>
                    <label>Enter Last Name:</label>
                    <input type="text" placeholder="Please enter the last name"onChange={this.onEvent} name ="last_name"></input>
                </div>
                <div>
                    <label>Enter email ID:</label>
                    <input type="text" placeholder="Please enter the email id"onChange={this.onEvent} name="email_id"></input>
                </div>
                <div className="password">
                    <label>Enter the password:</label>
                    <input type={this.state.password? "text" : "password"} placeholder="Please enter the password"onChange={this.onEvent} name="password"/>
                    
                    {this.state.password ? <img src={require("../myproject/eye-open.png").default}className="image" onClick={()=>this.hideShowPassword(false)}/> 
                    :
                    <img src={require("../myproject/eye-close.png").default}className="image" onClick={()=>this.hideShowPassword(true)}/> }
                    

                </div>
                <div>
                    <label>Select the gender:</label>
                    <input type="radio" onChange={this.onEvent} name="gender" value="male" />male
                    <input type="radio" onChange={this.onEvent} name="gender" value="female" />female
                    <input type="radio" onChange={this.onEvent} name="gender" value="others" />others
                    
                </div>
                <div>
                    <label>Select your DOB:</label>
                    <input type="date" onChange={this.onEvent} name="dob"></input>
                </div>
                <div>
                    <label>Enter your address:</label>
                    <textarea placeholder="please enter your address" onChange={this.onEvent} name="address"></textarea>
                </div>
                <div>
                    <label>Select your city:</label>
                    <select onChange={this.onEvent} name="city">
                        <option>please select any city</option>
                        <option>banglore</option>
                        <option>hyderabad</option>
                        <option>goa</option>
                        <option>kolar</option>
                        <option>bangarpet</option>
                        <option>new york</option>
                    </select>
                    <div>
                        <button onClick={()=>this.onCreate()}>Create Account</button>
                    </div>
                    <h1>student name is:{student_name}</h1>
                    <h1>student firstname is:{this.state.first_name}</h1>
                </div>

            </div>

            

        )
    }
}

export default Register;