import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import AddUser from './AddUser'
import { Table } from 'reactstrap';
import axios from 'axios';
import { ButtonToggle } from "reactstrap";

export default class DropUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[]
        }
    }
    

    componentDidMount(){
        axios.get('/users').then(res => this.setState({
          users:res.data
        }))
    
      }

      onPressDelete= (id)=> {
        axios.delete("/DelUser/" + id).then(res => {  //
                    this.setState({
            users: this.state.users.filter(el => el._id !== id)
          })
        })
        }   
    
    render() {
        return (
            
                
                  <Table dark>
      <thead>
        <tr>
          
          <th>UserName</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

        {this.state.users.map(el=>{return (<tr>
        <th>{el.username}</th>
        <td><ButtonToggle color="danger" id={el.id} onClick={()=>{this.onPressDelete(el._id)}}>Drop user</ButtonToggle>{' '}</td>

</tr>)}
            )}
      </tbody>
    </Table>
     
            
        )
    }
}
