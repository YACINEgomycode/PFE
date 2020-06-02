import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';

import axios from 'axios'

// EditGrille component to edit class Grille 

class EditGrille extends Component {
    // initial state
    constructor (props){
        super(props);
        this.state={
            profile:[],
            InspecteurNDTMT:'',
            InspecteurNDTPT:'',
            InspecteurNDTUT:'',
            InspecteurNDTRT:'',
            InspecteurNDTVT:'',
            InspecteurPeinture:'',
            InspecteurEnSoudage:'',
            InspecteurEnLevage:'',
            InspecteurInstallation:'',
            InspecteurInstallationElèctrique:'',
            InspecteurInstallationdeGaz:'',
            InspecteurAppareilàPression:'',
            ExpertTechnique:'',
            ExpertInspecteurProtectionCathodique:'',
            ExpertRBI:'',
            InspecteurStorageTank:'',
            InspecteurPipeline:'',
            InspecteurIncendie:'',
            isLoading: false,
            newexperiences:[{
                exps:'',
                value:''
            }],
           
        }
    }
// onChange get data from input 
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      classSelect = e => {
       
        var options = document.getElementById("Select");
        var cl= options[options.selectedIndex].value;
        this.setState({
            [e.target.name]: cl
        })
      };
      
// componentDidMount get data from database
      componentDidMount () {
        axios.get("/expertsList/" + this.props.id ).then(res => this.setState({
          ...res.data
        }
          ))}
// onEditPressed modify data 
          onEditPressed = () => {
            axios.put("/expertsList/" + this.props.id,{
                InspecteurNDTMT: this.state.InspecteurNDTMT,
                InspecteurNDTPT: this.state.InspecteurNDTPT,
                InspecteurNDTUT: this.state.InspecteurNDTUT,
                InspecteurNDTRT: this.state.InspecteurNDTRT,
                InspecteurNDTVT: this.state.InspecteurNDTVT,
                InspecteurPeinture: this.state.InspecteurPeinture,
                InspecteurEnSoudage: this.state.InspecteurEnSoudage,
                InspecteurEnLevage: this.state.InspecteurEnLevage,
                InspecteurInstallation: this.state.InspecteurInstallation,
                InspecteurInstallationElèctrique: this.state.InspecteurInstallationElèctrique,
                InspecteurInstallationdeGaz: this.state.InspecteurInstallationdeGaz,
                InspecteurAppareilàPression: this.state.InspecteurAppareilàPression,
                ExpertTechnique: this.state.ExpertTechnique,
                ExpertInspecteurProtectionCathodique: this.state.ExpertInspecteurProtectionCathodique,
                ExpertRBI: this.state.ExpertRBI,
                InspecteurStorageTank: this.state.InspecteurStorageTank,
                InspecteurPipeline: this.state.InspecteurPipeline,
                InspecteurIncendie: this.state.InspecteurIncendie,
                newexperiences:this.state.newexperiences,
            })
            // button animation 
            this.setState({ isLoading: true})
              setTimeout(() => {
                this.setState(() => ({
                  isLoading: false,
                }));
              }, 1200)
          }
          
    render() {
        return (
            <div style={{marginTop:'80px', color:'white'}}>
                <div className="editGrilleItem">
                    <label>Inspecteur NDT MT</label>
                    <select name="InspecteurNDTMT" onChange={this.onChange} value={this.state.InspecteurNDTMT}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur NDT PT</label>
                    <select name="InspecteurNDTPT" onChange={this.onChange} value={this.state.InspecteurNDTPT}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur NDT UT</label>
                    <select name="InspecteurNDTUT" onChange={this.onChange} value={this.state.InspecteurNDTUT}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur NDT RT</label>
                    <select name="InspecteurNDTRT" onChange={this.onChange} value={this.state.InspecteurNDTRT}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur NDT VT</label>
                    <select name="InspecteurNDTVT" onChange={this.onChange} value={this.state.InspecteurNDTVT}>
                        <option  value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur Peinture</label>
                    <select name="InspecteurPeinture" onChange={this.onChange} value={this.state.InspecteurPeinture}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur en soudage</label>
                    <select name="InspecteurEnSoudage" onChange={this.onChange} value={this.state.InspecteurEnSoudage}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur en levage</label>
                    <select name="InspecteurEnLevage" onChange={this.onChange} value={this.state.InspecteurEnLevage}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur installation</label>
                    <select name="InspecteurInstallation" onChange={this.onChange} value={this.state.InspecteurInstallation}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur installation élèctrique</label>
                    <select name="InspecteurInstallationElèctrique" onChange={this.onChange} value={this.state.InspecteurInstallationElèctrique}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur installation de gaz</label>
                    <select name="InspecteurInstallationdeGaz" onChange={this.onChange} value={this.state.InspecteurInstallationdeGaz}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur appareil à pression</label>
                    <select name="InspecteurAppareilàPression" onChange={this.onChange} value={this.state.InspecteurAppareilàPression}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Expert technique</label>
                    <select name="ExpertTechnique" onChange={this.onChange} value={this.state.ExpertTechnique}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Expert inspecteur protection cathodique</label>
                    <select name="ExpertInspecteurProtectionCathodique" onChange={this.onChange} value={this.state.ExpertInspecteurProtectionCathodique}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Expert RBI</label>
                    <select name="ExpertRBI" onChange={this.onChange} value={this.state.ExpertRBI}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur storage tank</label>
                    <select name="InspecteurStorageTank" onChange={this.onChange} value={this.state.InspecteurStorageTank}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="editGrilleItem">
                    <label>Inspecteur pipeline</label>
                    <select name="InspecteurPipeline" onChange={this.onChange} value={this.state.InspecteurPipeline}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                



                <div className="editGrilleItem">
                    <label>Inspecteur incendie</label>
                    <select name="InspecteurIncendie" onChange={this.onChange} value={this.state.InspecteurIncendie}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
       
       {this.state.newexperiences.map((el)=>{return(
            <div className="editGrilleItem"><label name={el.exps}>{el.exps}</label>
             <select  id="Select"  onChange={this.onChange}>
                        <option value="N/A">N/A</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
            
            
            </div>
       )})}




                <div style={{margin:'10px'}}>
                    <Link  to='/grille_de_comp'>
                        <Button color="primary" onClick={this.onEditPressed} style={{margin:'10px'}}>
                            { !this.state.isLoading &&  <span> Modifier</span>}
                            {  this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Modifier</span>}
                        </Button>
                    </Link>
                
                    <Link  to='/grille_de_comp'> 
                        <Button color="secondary" style={{margin:'10px'}}>Annuler</Button> 
                    </Link>
                </div>
            </div>
        )
    }
}
export default EditGrille;

// InspecteurNDTMT
// InspecteurNDTPT
// InspecteurNDTUT
// InspecteurNDTRT
// InspecteurNDTVT 
// InspecteurPeinture
// InspecteurEnSoudage
// InspecteurEnLevage
// InspecteurInstallation
// InspecteurInstallationElèctrique
// InspecteurInstallationdeGaz
// InspecteurAppareilàPression
// ExpertTechnique
// ExpertInspecteurProtectionCathodique
// ExpertRBI
// InspecteurStorageTank
// InspecteurPipeline
// InspecteurIncendie