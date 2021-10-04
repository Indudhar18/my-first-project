import React, {Component} from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Skills from "./skills";
import Educ from "./eduinfo";
import Strength from "./strengths";
import Intro from "./myintro";


class Myself extends Component{

    render(){
        return(
            <div className="main">
                <div className="first">
                    <h1>Welcome to my world</h1>
                </div>
                <div className="second">
                    <div className="second1">
                        <NavLink className="butn"  to="/myself/myintro">My Self</NavLink>
                        <br/>
                        <NavLink className="butn"  to="/myself/skills">Skill Sets</NavLink>
                        <br/>
                        <NavLink className="butn"  to="/myself/eduinfo">Education details</NavLink>
                        <br/>
                        <NavLink className="butn"  to="/myself/strengths">My Strengths</NavLink>
                        <br/>
                    </div>
                    <div className="second2">
                        
                        <Switch>
                            <Route path="/myself/myintro" component={Intro}></Route>
                            <Route path="/myself/skills" component={Skills}></Route>
                            <Route path="/myself/eduinfo" component={Educ}></Route>
                            <Route path="/myself/strengths" component={Strength}></Route>
                        </Switch>
                    </div>
                    <div className="second3"><h4>Contacts</h4>
                        <NavLink className="butn1"  to="/myself/myintro"></NavLink>
                        <br/>
                        <NavLink className="butn2"  to="/myself/skills"></NavLink>
                        <br/>
                        <NavLink className="butn3"  to="/myself/eduinfo"></NavLink>
                        <br/>
                        <NavLink className="butn4"  to="/myself/strengths"></NavLink>
                        <br/>
                    </div>
                </div>
                <div className="third">
                    <h2>"LiVe LiKe A LeAdEr..DiE LiKe A SoLdIeR"</h2>
                </div>
            </div>

        )
    }
}
export default Myself;
