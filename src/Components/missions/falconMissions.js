import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import '../App.css';
import ModalE from './Mission';
import Clients from './Clients';


 
export default class flaconMissions extends Component {
  

   
    render () {
    
    return(
        <div>
          
                 <div className="homeMenu">
                 <div>
                         <h1 className="falcon">Falcon</h1>
                         <h5 className="ressources">Missions</h5></div>
                         <div className="home-btns">
                         <ModalE/>
                         <Link to='/missions'>
                         <button className="homeButton">Consulter missions</button>
                         </Link>
                         <Clients/>
                         </div>
     
                         
     </div>
           
           
            </div>
        
    
     ) }
}
