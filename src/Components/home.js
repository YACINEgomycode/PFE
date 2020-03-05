import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ModalExample from './ressources/modal'
import Addcertif from './ressources/Addcertif'

// Home class to display homepage
export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{display:'flex', flexDirection:'column', position:"absolute", left:"200px",top:"200px"}}>
                    <h1 className="falcon">Falcon</h1>
                    <h2 className="ressources">Ressources</h2>
                    <div style={{display:'flex'}}>
                        <div>
                        <ModalExample />{/*button open modal to add an expert */}
                        <Addcertif/>
                        </div>
                        <Link to='/search/expertsList'><button className="homeButton">Chercher expert</button></Link>
                        <Link to='/add/expertsList'> <button className="homeButton">Consulter expert</button> </Link>
                        <Link to='/grille_de_comp'> <button className="homeButtonG">Grille de compétences</button> </Link>
                        {/* <Link to='./addcert'> <button className="homeButton">Ajouter certificat</button></Link> */}
                        
                    </div>
               </div>
            </div>
        )
    }
}
