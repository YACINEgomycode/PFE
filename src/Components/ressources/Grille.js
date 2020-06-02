import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import '../App.css';


// Grille class refers to 'grille de compétences' 
class Grille extends Component {
    // initial state 
    constructor (props){
        super(props);
        this.state={
            profile:[], 
            array:[],// initial variable to put extracting data from database named FalconData from collection named experts

            // initial all values of expert expertise to N/A
            InspecteurNDTMT:'N/A',
            InspecteurNDTPT:'N/A',
            InspecteurNDTUT:'N/A',
            InspecteurNDTRT:'N/A',
            InspecteurNDTVT:'N/A',
            InspecteurPeinture:'N/A',
            InspecteurEnSoudage:'N/A',
            InspecteurEnLevage:'N/A',
            InspecteurInstallation:'N/A',
            InspecteurInstallationElèctrique:'N/A',
            InspecteurInstallationdeGaz:'N/A',
            InspecteurAppareilàPression:'N/A',
            ExpertTechnique:'N/A',
            ExpertInspecteurProtectionCathodique:'N/A',
            ExpertRBI:'N/A',
            InspecteurStorageTank:'N/A',
            InspecteurPipeline:'N/A',
            InspecteurIncendie:'N/A',
        }
    }

    getexpertises(){
        axios.get('/expertise').then(resss=> this.setState({
          array:resss.data,
         
    
        }))
    
      }
    // componentDidMount get data from database
    componentDidMount () {
        this.getexpertises();
        axios
        .get("./expertsList")
        .then(res => this.setState({
            profile : res.data  // get all data from data base named FalconData from collection named experts
        }))
        .catch(err =>console.log("err", err));
         // if there is an error will be catched just open the console 
         
    }
   
   
    
    render() {
        return (
            <div className="grille">

                <center>
                    <h2>Grille de compétences</h2>
                </center>
                <table>
                    <thead>
                        <tr>
                            <th><span style={{float:'right'}}>Expert</span><br /><span>Expertise</span></th>
                            {
                        this.state.profile.map((el) =>{
                            return (   
                            <th>
                                            {el.name.toUpperCase()}{' '}{el.lastname.toUpperCase()}<br />
                                            <Link to={`/edit_grille/${el._id}`}>
                                                <Button color="primary" >Modifier</Button>
                                            </Link>
                                        </th>
                                        
                            )})}
                        </tr>
                    </thead>
                   
                    <tbody>
                        <tr>
                            <td>Inspecteur NDT MT</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurNDTMT}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Inspecteur NDT PT</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurNDTPT}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Inspecteur NDT UT</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurNDTUT}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Inspecteur NDT RT</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurNDTRT}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Inspecteur NDT VT</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurNDTVT}</td>
                            )})}
                        </tr>
                        <tr>
                            <td>Inspecteur peinture</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurPeinture}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur en soudage</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurEnSoudage}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur En Levage</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurEnLevage}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur installation élèctrique</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurInstallationElèctrique}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur installation de gaz</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurInstallationdeGaz}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur appareil à pression</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurAppareilàPression}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Expert technique</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.ExpertTechnique}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Expert inspecteur protection cathodique</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.ExpertInspecteurProtectionCathodique}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Expert RBI</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.ExpertRBI}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur storage tank</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurStorageTank}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur pipeline</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurPipeline}</td>
                            )})}
                            </tr>
                        <tr>
                            <td>Inspecteur incendie</td>
                            {this.state.profile.map((el) =>{
                            return (
                                <td>{el.InspecteurIncendie}</td>
                            )})}
                            </tr>


                         
<tr>
                            
{this.state.array.map((el)=>{return(<tr><td>{el.exps}</td></tr>)})}

{this.state.profile.map((ell)=>{
return(<tr className="tryy">
    {ell.newexperiences.map((x)=>{return (<td className="try">{x.value}</td>)})}
     </tr>)


})}
    


  

                        
                             
                           

    </tr>                    
                                  


                           
                                
                        
                        
                    </tbody>
                              
                                
                               
                    
                </table>



            </div>
        )
    }
}
export default Grille;
