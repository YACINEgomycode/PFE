import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

import './inv.css'
import { Button } from 'reactstrap';

import {Link} from 'react-router-dom'
import More from './More';
import PrintComponents from "react-print-components";
import Barcode from './react-barcode';






export default class Tran extends Component {
    state = { 
        transactions:[],
       
        // ab:'C:/Users/Y A C I N E/Desktop/Falcon ress/src/Media/' ,
        
    }
    
  

    

    // componentDidMount finction that get data from database
componentDidMount () {
    axios
    .get("/transaction")
    .then(res => this.setState({
        transactions : res.data    // get data from database named FalconData and put all data in variable called profile
    }))
    .catch(err =>console.log("err", err))
  }
   
   
   
    render() {
     
        return (
            <div>
              <Table responsive>
            <thead>
              <tr>
                <th className="titre-tab">type_tr</th>
                <th className="titre-tab">reference_falcon</th>
                <th className="titre-tab">type_equi</th>
                <th className="titre-tab">num_mission</th>
                <th className="titre-tab">date_tr</th>
                <th className="titre-tab"> affectation</th>
                <th className="titre-tab">etat_equi</th>
                <th className="titre-tab">commentaire</th>
                
                
                
               
              </tr>
            </thead>
            <tbody className="tab-body">
             

            {this.state.transactions.map(((el,i)=>{
                  return (<tr>
                    <td scope="row">{el.type_tr}</td>
                    <td>{el.reference_falcon}</td>
                <td>{el.type_equi}</td>
                <td>{el.num_mission}</td>
                <td>{el.date_tr}</td> 
                <td>{el.affectation}</td>
                <td>{el.etat_equi}</td>      
                <td>{el.commentaire}</td>
              
               
              
                     
               
              
                 
                  </tr>)
                   
              }))}
              
             
             
            </tbody>
          </Table>
                
            
            </div>
        )
    }
}
