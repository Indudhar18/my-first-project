import React, {Component} from "react";
import axios from "axios";


class Inbox extends Component{

    constructor (props) {
        super(props);
        this.state={
            userList: []
        }
    }

listUser(){
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
    .then((response) => {
        const serverData = response.data;
        console.log(serverData.data)
        this.setState({
            userList: serverData.data
        })
    })

    .catch((error) => {
        console.log(error)
    })
}

    render(){

        const user = this.state.userList.map((value, index)=>{
            return(
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>{value.email}</td>
                    <td><img src={value.avatar} alt={value.avatar} className="profile-image"/></td>
                </tr>
            )
        })

        return(
            <div><h1>Welcome to inbox</h1>
            <button onClick={() => this.listUser()}>List the users</button>
            <table id = "customers">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>

                    {user}
                    
                </tbody>
            </table>
            </div>
            
          
        )
    }
}

export default Inbox;


// to see just response in the console.

// class Inbox extends Component{

//     listUser(){
//         const url = "https://reqres.in/api/users?page=2";
    
//         axios.get(url)
//         .then((response) => {
//             console.log(response.data)
//         })
    
//         .catch((error) => {
//             console.log(error)
//         })
//     }
    
//         render(){
//             return(
//                 <div><h1>Welcome to inbox</h1>
//                 <button onClick={() => this.listUser()}>List the users</button>
//                 </div>
                
              
//             )
//         }
//     }
    
//     export default Inbox;