import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Search from './search'
import ExpertCard from './expertCard'

import '../App.css';
// ExpertContainer class to display all experts profiles 

class ExpertContainer extends Component {
        state = { 
            profile:[], // initial variable to put extracting data from database named FalconData from collection named experts
        }

        // componentDidMount finction that get data from database
    componentDidMount () {
        axios
        .get("/expertsList")
        .then(res => this.setState({
            profile : res.data    // get data from database named FalconData and put all data in variable called profile
        }))
        .catch(err =>console.log("err", err))
      }
      // updateExpertList function that update expert profile after modifying
      updateExpertList = (value) =>{
          this.setState({
              profile: value   // update profile after modifying data
          })
      }
      // onPressDelete function that delete an expert
      onPressDelete= (id)=> {
        axios.delete("/expertsList/" + id).then(res => {  //
                    this.setState({
            profile: this.state.profile.filter(el => el._id !== id)
          })
        })
        }   
    render(){
        return(
            <div >
                <div style={{float:'right'}}>
                <Link to='/search/expertsList'><button className="homeButton">Chercher expert</button></Link>
               </div>
            
            <div className="ExpertContainer">
               
            {this.state.profile
                .map((el, i) =>{
                    // pass data as a props to expertCard container
                    return  <ExpertCard key={i} expert={el} onPressDelete={this.onPressDelete} key={el._id}/> 
                })
            } 
            </div>
            </div>
        );
    }
}

export default ExpertContainer;