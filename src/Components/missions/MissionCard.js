import React, { Component } from 'react'
import "./ordreMission.css"
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import MissionDelete from './missionDelete' 

export default class MissionCard extends Component {
    render() {
        return (
            <div className="carte">
            <div className="MissionConatiner">

           <span className="missionDescription"> 
                

               <h4 className="descriptionTitle">Numéro d'ordre:<br/>{this.props.data.numOrdre}</h4>
            </span>
            <hr className="ligne"/>
            
            <span className="missionDescription">
            <h4 className="descriptionTitle">Inspecteurs</h4><br/>
               Nom inspecteur: {this.props.data.NomPrenom}<br/>
               Qualifications: {this.props.data.Qualification}<br/>
               Date debut: {this.props.data.dateDebut}<br/>
               Date fin: {this.props.data.dateFin}<br/>
               Durée visite: {this.props.data.dureeVisite}<br/>
              
            </span>
            <hr className="ligne"/>
            
            <span className="missionDescription">
            <h4 className="descriptionTitle">Détails du Projet</h4><br/>
               Lieu mission: {this.props.data.lieuMission}<br/>
               Client: {this.props.data.client}
            </span>
           
            
            {/* <span>
            <h4 className="descriptionTitle">Etendue de la mission</h4><br/>
               Etendue: {this.props.data.etendue}
            </span> */}
            <hr className="ligne"/>
            <span className="missionDescription">
           <h4 className="descriptionTitle">Logistiques</h4><br/>
               Materiel: {this.props.data.materiels}<br/>
               Lieu: {this.props.data.lieu}<br/>
               Mobilistaion: {this.props.data.mobilisation}<br/>
               Logement: {this.props.data.logement}<br/>
              
            </span>
            </div>
            
            <div className="imprimer-ordre">
           
            <Link to={`/ordre/${this.props.data._id}`}>
            <Button className="btn-ordre">Imprimer Ordre</Button>
                            </Link>
            <Link to={`/edit/missionsList/${this.props.data._id}`}>
            <Button className="btn-ordre" color="primary" >Modifier</Button>
                            </Link>
                            <MissionDelete onDelete={this.props.onDelete} id={this.props.data} />
            
            
            </div>
            
            </div>
        )
    }
}
