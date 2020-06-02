import React, { Component } from 'react'
import '../App.css';
import AddEquipment from './Addequipment';
import Article from './Article';
import {Link} from 'react-router-dom'

export default class Equipment extends Component {
    render() {
        return (
            <div>
          
            <div className="homeMenu">
            <div>
                    <h1 className="falcon">Falcon</h1>
                    <h5 className="ressources">Equipments</h5></div>
                    <div className="home-btns">
                   
                   
                    <AddEquipment/>
                    <Article/>
                     <Link to='/Inventaire'> 
                        <button className="homeButton">Inventaire</button>
                        </Link> 
                    
                        <Link to='/Transactions'> 
                    <button className="homeButton">Transactions </button>
                   </Link>
                    
                    </div>

                    
</div>
      
      
       </div>
   
        )
    }
}
