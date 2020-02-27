import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import ModalDeleteExpert from './modalDelete'
import './expertCard.css';

// ExpertCard class for expert profile card
export default class ExpertCard extends Component {
  
    render() {
        return (
            <div className="expertCard">
                <div className="card-container">
                    <div style={{display: "flex", justifyContent:"space-between"}}>
                        <div className="header">
                            <h3 className="name">EXPERT: {this.props.expert.name}{' '}{this.props.expert.lastname}  </h3>
                            <div className="contacts">
                                <div style={{padding:'0px 5px'}} className="description">
                                    <h6>TEL</h6>
                                    <span>{this.props.expert.phone}</span>
                                </div>
                                
                                <div style={{padding:'0px 5px'}} className="description">
                                    <h6 >EMAIL</h6>
                                    <span>{this.props.expert.email}</span>
                                </div>
                            </div>
                            <div className="experience-field">
                            <p className="par">
                                <label>EXPERIENCE:</label>
                            </p>
                            {/* <p >
                               {this.props.expert.experience}
                            </p> */}
                            <ul>
                        {this.props.expert.experience.map((ell,j) => { return <li key={j}>{ell}</li>})}</ul>
                            </div>
                            
                        </div>
                        <div style={{display: 'flex'}}>
                        <div>
                            <h6 style={{fontWeight:'bold'}}>Qualifications</h6>
                            <div className="skills">
                                <ul>
                                    {this.props.expert.expertiseArr.filter(item => item.checked).map(el => { 
                                        return <li key={el.id}>{el.value}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h6 style={{fontWeight:'bold'}}>Certifications</h6>
                            <div className="skills">
                                <ul>
                                    {this.props.expert.certfiArr.filter(item => item.checked).map(el => { 
                                        return <li key={el.id}>{el.value}</li>
                                    })}
                                </ul>
                                
                                </div>
                        </div>
                        </div>
                    </div>
                    <div style={{display:'flex'}}>
                            <div className="contacts">
                                <div className="description">
                                        <h5>Visa</h5>
                                        <span>{this.props.expert.visa}</span>
                                </div>

                                { this.props.expert.visas.filter(item => item.checked).map((el,i) => {
                                    return<div> { this.props.expert.visa === 'oui' ? <div className='visa' key={i}>
                                                <div style={{padding:'0px 5px'}}>
                                                <h5>Type</h5>
                                                <span style={{fontSize:'10px'}}>{el.value}</span>
                                                </div>
                                                <div >
                                                    <h5 style={{padding:'0px 5px'}}>Expire le</h5>
                                                    <span style={{fontSize:'10px'}}>{el.expire}</span>
                                                </div>
                                            </div> : <div></div>}</div>
                                    })                                
                                }
                            </div>
                            <hr style={{height:'50px', width:'1px', border:'none', borderLeft:'1px solid hsla(200, 10%, 50%,100)'}}/>
                            <div style={{display:'flex', flexDirection: 'row'}}>
                            <div className="contacts">
                                <div className="description">
                                    <h5 style={{padding:'0px 5px'}}>Carte sud</h5>
                                    <span>{this.props.expert.carteSud}</span>
                                </div>
                                <div className="description">
                                    <h5 >{this.props.expert.carteSud === 'oui' ? <h5 style={{padding:'0px 5px'}}>Expire le</h5> : <h5></h5>}</h5>
                                    <span>{this.props.expert.carteexpire}</span>
                                </div>
                            </div>
                            <div className="contacts">
                                <div className="description">
                                        <h5 style={{padding:'0px 5px'}}>Aptitude médicale</h5>
                                        <span>{this.props.expert.aptMedicale}</span>
                                </div>
                                <div className="description">
                                    <h5>{this.props.expert.aptMedicale === 'oui' ? <h5 style={{padding:'0px 5px'}}>Expire le</h5> : <h5></h5>}</h5>
                                    <span>{this.props.expert.aptexpire}</span>
                                </div>
                            </div>
                            </div>
                            </div>
                    <div className="footerButton">
                    
                            <Link to={`/edit/expertsList/${this.props.expert._id}`}>
                                <Button color="primary" >Modifier</Button>
                            </Link>
                            <Link to={`/print/${this.props.expert._id}`}>
                                <Button>Imprimer CV</Button>
                            </Link>
                            <ModalDeleteExpert onPressDelete={this.props.onPressDelete} id={this.props.expert}/>
                    </div>
                </div>
            </div>
        )
    }
}
