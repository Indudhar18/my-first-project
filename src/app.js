import React, {Component} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about-us';
import Contact from './pages/contact-us';
import Product from './pages/product';
import Mail from "./mails/mail";
import Assign from "./ui";
import Register from "./pages/register";
// import Myself from "./myproject/myself";


class App extends Component {
    render(){
        return(
            <BrowserRouter>
            <Switch>
                
                <Route path = "/" exact component={Home}></Route>
                <Route path = "/home" component={Home}></Route>
                <Route path = "/about-us" component={About}></Route>
                <Route path = "/contact-us" component={Contact}></Route>
                <Route path = "/product" component={Product}></Route>
                <Route path = "/mail" component={Mail}></Route>
                <Route path = "/ui" component={Assign}></Route>
                <Route path = "/register" component={Register}></Route>

                {/* <Route path = "/myself" component={Myself}></Route> */}
  
            </Switch>
            </BrowserRouter>
        )
    }
}
export default App;

// import React, {Component} from 'react';
// import { render } from 'react-dom';

// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       message : "This is a state message"
//     }
//   }

//   display(){
//     // console.log("Hello, Welcome to React")
//     this.setState({
//       message : "Hello, Welcome to React"
//     })
//   }

//   render(){
//     return(
//       <div>
//         <h1>Hello! Welcome to React Learning</h1>
//         <h1>Tutorial by Karthick</h1>
//         <h1>{this.state.message}</h1>
//         <button onClick={() => this.display()}>Run the function</button>
//       </div>
//     )
//   }

// }

// export default App;



