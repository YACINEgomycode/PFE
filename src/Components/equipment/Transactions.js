import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom'
import AddTr from './AddTr';

export default class Transactions extends Component {
    render() {
        return (
            <div>
          
            <div className="homeMenu">
            <div>
                    <h1 className="falcon">Falcon</h1>
                    <h5 className="ressources">Equipments</h5></div>
                    <div className="home-btns">
                   
                   
                  
                   
                   <AddTr/>
                    
<Link to="/Tran">
                    <button className="homeButton">Afficher Transaction </button>
                   </Link>
                    
                    </div>

                    
</div>
      
      
       </div>
   
        )
    }
}
