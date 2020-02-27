import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './navbar'
import Home from './home'
import Search from './search'
import PrintProfile from './printProfile'
import Grille from './Grille'
import EditGrille from './EditGrille'
import ExpertContainer from './expertContainer'
import EditProfileExpert from './editProfileExpert'
import Acceuil from './acceuil'
import Mission from './Mission'
import MissionContainer from "./MissionContainer"
import PrintOrdre from './PrintOrdre'
import Editmission from './Editmission'
import Searchmission from './Searchmission'
import ConnectJWT from './ConnectJWT'
import PrivateRoute from './PrivateRoute'
import Clients from './Clients'
import falconMissions from './falconMissions'
import "../App.css"
import Addcertif from './Addcertif'



// Main class for routing all components

export default class Main extends Component {   
    render() {
        return (
            <div>
                {/* define routes of project*/}
                    <Router>
                        <Navbar/> 
                        <Switch>

                        <Route exact path='/' render={() => <ConnectJWT /> }/>
                        <Route exact path='/falconMissions' component={falconMissions}/>
                        <Route exact path='/cc' render={() => <Clients/>}/>
                        <Route exact path='/addcert' render={() => <Addcertif/>}/>
                        <Route exact path='/ordre/:id' render={(props) => <PrintOrdre id={props.match.params.id}/> } />
                            <PrivateRoute exact path='/missions' component={MissionContainer}/>
                        <Route  exact path='/acceuil' render={() => <Acceuil />} /> 
                            <PrivateRoute exact path='/addmission' component={Mission}/>
                        <Route exact path="/edit/missionsList/:id" render={(props) => <Editmission id={props.match.params.id}/>} />
                            <PrivateRoute exact path='/home' component={Home} /> 
                        <Route exact path="/add/expertsList" render={() => <ExpertContainer />} />
                            <PrivateRoute exact path="/search/expertsList" component={Search} />
                            <PrivateRoute exact path="/search/missionsList" component={Searchmission} />
                        <Route exact path="/edit/expertsList/:id" render={(props) => <EditProfileExpert id={props.match.params.id}/>} />
                        <Route exact path="/print/:id" render={(props) => <PrintProfile id={props.match.params.id}/> } />
                            <PrivateRoute exact path="/grille_de_comp" component={Grille} />
                        <Route exact path="/edit_grille/:id" render={(props) => <EditGrille id={props.match.params.id}/>} />
                        </Switch>
                    </Router>
                    
            </div>
        )
    }
}
