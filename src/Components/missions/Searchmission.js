import React, { Component } from 'react'
import MissionCard from './MissionCard';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default class Searchmission extends Component {
    state = { 
        mission:[], // initial variable to put extracting data from database named FalconData from collection named experts
        numOrdre:'', // numero ordre
        client:'', // client
        filter:'',                    // all filter 
        filter1:'',
    }

    // componentDidMount get data from database
    componentDidMount () {
        axios
        .get("/missionsList/")
        .then(res => this.setState({
            mission : res.data  // get all data from data base named FalconData from collection named missions
        }))
        .catch(err =>console.log("err", err))
      }

      // onChangeSearch get value of order number input search
      onChangeSearch = (e) => {
        this.setState({
            filter: e.target.value,  // filter variable corresponding to order number
            
     });
   };
         // onChangeSearch1 get value of client input search

      onChangeSearch1 = (e) => {
        this.setState({
            
            filter1: e.target.value // filter variable corresponding to clients
     });
   };

    render() {
        const { filter, mission, filter1,}= this.state;
        const lowercasedFilter = filter.toLowerCase();
        const lowercasedFilter1 = filter1.toLowerCase();
        const filteredData = mission.filter((item, i) => {
            return ( (item.numOrdre.toLowerCase().includes(lowercasedFilter) || !filter) 
            && (item.client.toLowerCase().includes(lowercasedFilter1) || !filter1) )})
        return ( 
            <div>
                <div style={{display:'flex'}}>
            <div className="inputSyle">
               <label style={{color:'white', fontWeight:'bold'}}>Chercher numéro d'ordre</label> 
               <input type="text" name="numOrdre" onChange={this.onChangeSearch} value={filter}/>

               <label style={{color:'white', fontWeight:'bold', marginLeft:'55px'}}>Chercher Client</label>
                <input type="text" name="client" onChange={this.onChangeSearch1} value={filter1}/>
            </div>
            </div>

            {filteredData.map((el, i) =>{
                    return  <MissionCard key={i} data={el}  key={el._id}/>  
                    
                })
            } 

            </div>
        )
    }
}
