import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AddUser from './AddUser'

export default class Use extends Component {
    
    render() {
        return (
            
                 <div className="homeMenu">
                 <div>
                         <h1 className="falcon">Falcon</h1>
                         <h5 className="ressources">Users</h5></div>
                         <div className="home-btns">
                     <AddUser/>
                         
                        
                        
                         <Link to='/DropUser'>
                         <button className="homeButton">Drop User</button>
                         </Link>
                        
                         </div>
     
                         
     
            </div>
        )
    }
}
