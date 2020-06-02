import React, { Component } from 'react'

import {Link} from 'react-router-dom'
import '../App.css';
import ModalE from './missions/Mission';
import Clients from './missions/Clients';
import jwt_decode from "jwt-decode";

 
export default class Acceuil extends Component {
  

   
    render () {
    const token =localStorage.getItem("token")
    var decoded=jwt_decode(token)
    return(
        <div>
            {decoded.username=="admin"? (
                 <div className="homeMenu">
                 <div>
                         <h1 className="falcon">Falcon</h1>
                         <h5 className="ressources">inspection & services</h5></div>
                         <div className="home-btns">
                     <Link to='/home'>
                         <button className="homeButton">Falcon Ressources</button>
                         </Link>
                         
                         <Link to='/falconMissions'>
                         <button className="homeButton">Falcon Missions</button>
                         </Link>
                        
                         <Link to='/EquipmentMenu'>
                         <button className="homeButton">Falcon Equipments</button>
                         </Link>
                         <Link to='/Utilisateurs'>
                         <button className="homeButton">Manage users</button>
                         </Link>

                        
                         </div>
     
                         
     </div>
            ) : (  <div className="homeMenu">
            <div>
                    <h1 className="falcon">Falcon</h1>
                    <h5 className="ressources">inspection & services</h5></div>
                    <div className="home-btns">
                <Link to='/home'>
                    <button className="homeButton">Falcon Ressources</button>
                    </Link>
                    <Link to='/missions'>
                         <button className="homeButton">Consulter missions</button>
                         </Link>
                    </div></div>)}
           
            </div>
        
    
     ) }
}
