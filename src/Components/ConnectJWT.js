import React, { Component } from 'react'
import axios from "axios";
import {Redirect} from 'react-router-dom'
import "../App.css"


export default class ConnectJWT extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             password:"",
             toDashboard: false,
             show:this.props.show
          
        }
    }
   

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
  login = () => {
        const { username, password } = this.state;
        axios
          .post("http://localhost:5000/login", { username, password })
          .then(res => {
            // console.log(res);
            localStorage.setItem("token", res.data.token);
            this.setState({toDashboard:true,
           })            
          })
          .catch(err => alert('user not found'));
      };

    
    render() {
      
      
      
        if (this.state.toDashboard === true) {
         
          return <Redirect to='/acceuil' />
        }
        return (
          
          <div className="home">
            
            <div className="falcontitle">
           
                    <h1 className="falcon">Falcon</h1>
                    <h5 className="ressources">inspection & services</h5></div>
                   
                    <div className="falconlogin">
        <form method="post"className="login">
            <h2 className="ressources">Login</h2>
            
            <input className="editInput" name="username" placeholder="Username" onChange={this.handleChange}/>
            <input className="editInput" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
          
          
           <button className="homeButtonG" type="button"onClick={this.login} value="login">Log In</button>
           
           </form></div>
    
               
                    

                    
</div>
           
        )
          
        }}
