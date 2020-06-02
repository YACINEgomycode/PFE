import React, { Component } from 'react'
import PrintComponents from "react-print-components";
import Barcode from './react-barcode';
import axios from 'axios';


 export default class PrintBC extends Component {
    // initial state 
    constructor(props) {
        super(props);
        this.state = {
            Reference: '',
        };
    }

     // get data from data base 
     
    getdata(){
        axios.get("/article/"+this.props.id ).then(res => this.setState({
            ...res.data
      }))}
      
    
    
      
    
    // get data from data base 
    componentDidMount () {
        // axios.get("/missionsList/" + this.props.id ).then(res => this.setState({
        //   ...res.data
          this.getdata();
          
        }
    render (){
    return (
        <div>
            <PrintComponents trigger={<button>Print</button>}
 
>
<Barcode  id="hh"value={this.state.Reference}/>
</PrintComponents>
        </div>
    )
}}
