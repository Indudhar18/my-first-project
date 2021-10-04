import React, {Component} from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Inbox from "./inboxpage";
import Sent from "./sentpage";
import Draft from "./draftpage";
import Trash from "./trash";

class Mail extends Component{

    render(){
        return(
            <div className = "main">
                <div className = "first"></div>
                <div className = "second">
                    <div className ="second1">
                        <NavLink className="btn" activeClassName= "active-button" to="/mail/inbox">Inbox page</NavLink>
                        <br/>
                        <NavLink className="btn" activeClassName= "active-button" to="/mail/sent">Sent page</NavLink>
                        <br/>
                        <NavLink className="btn"activeClassName= "active-button" to="/mail/draft">Draft page</NavLink>
                        <br/>
                        <NavLink className="btn"activeClassName= "active-button" to="/mail/trash">Trash page</NavLink>
                    </div>
                    <div className = "second2">
                        <div className = "third1">
                            <Switch>
                               <Route path = "/mail/inbox" component={Inbox}></Route> 
                               <Route path = "/mail/sent" component={Sent}></Route> 
                               <Route path = "/mail/draft" component={Draft}></Route> 
                               <Route path = "/mail/trash" component={Trash}></Route> 
                            </Switch>
                        </div>
                        <div className = "third2"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Mail;