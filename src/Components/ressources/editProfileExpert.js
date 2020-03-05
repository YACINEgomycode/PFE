import React, { Component } from 'react'
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'reactstrap';

import '../App.css'

// EditProfileExpert class to edit expert profile 
export default class EditProfileExpert extends Component {

  // initial state 
  constructor(props) {
    super(props);
    this.state = {
        isLoading: false ,
        name: "",
        lastname: "",
        phone: "",
        email:"",
        visa:"",
        carteSud:"",
        aptMedicale:'',
        visaExpire:'',
        carteexpire:'',
        aptexpire:'',
        education:'',
        expYear:'',
        experience:"",
        dateDebut:'',
        dateFin:'',
        expertiseArr:[],
        certfiArr:[],
        visas:[
          {
            id: 50,
            value: "usa",
            checked: false,
            expire: ""
          },
          {
            id: 51,
            value: "schengen",
            checked: false,
            expire: ""
          },
          {
            id: 53,
            value: "canada",
            checked: false,
            expire: ""
          },
          {
            id: 54,
            value: "chine",
            checked: false,
            expire: ""
          }
        ],
        isModified: false,
        isChooseVisa: "",
        isChooseCarteSud: "",
        isChooseAptmedic: "",
        presentation:""
    };
}
// get data from data base 
componentDidMount () {
  axios.get("/expertsList/" + this.props.id ).then(res => this.setState({
    ...res.data
  }
    ))}
// get value of input 
onChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  });
};


// get value if checkbox checked (true) from expertiseArr array
onToggle(index, e) {
  let newItems = this.state.expertiseArr.slice();
  newItems[index].checked = !newItems[index].checked;

  this.setState({ expertiseArr: newItems });
}
// get value if checkbox checked (true) from certfiArr array
onToggleCertif(index, e) {
  let newItem = this.state.certfiArr.slice();
  newItem[index].checked = !newItem[index].checked;

  this.setState({ certfiArr: newItem });
}

classSelectVisa = e => {
  if (e.target.value === 'oui') {
    this.setState({
      isChooseVisa: "selected",
      [e.target.name]: e.target.value
    });
  } else // clear state after selcting 'non' and toggle className
    this.setState({
      isChooseVisa: "notSelected",
      [e.target.name]: e.target.value,
      visas:[
        {
          id: 50,
          value: "usa",
          checked: false,
          expire: ""
        },
        {
          id: 51,
          value: "schengen",
          checked: false,
          expire: ""
        },
        {
          id: 53,
          value: "canada",
          checked: false,
          expire: ""
        },
        {
          id: 54,
          value: "chine",
          checked: false,
          expire: ""
        }
      ]
    });
};
// classSelectCarteSud function that toggle between classes of css and get value from input

classSelectCarteSud = e => {
  if (e.target.value === 'oui') {
    this.setState({
      isChooseCarteSud: "selected",
      [e.target.name]: e.target.value
    });
  } else
    this.setState({
      isChooseCarteSud: "notSelected",
      [e.target.name]: e.target.value,
      carteexpire:''
    });
};
// classSelectAptmedic function that toggle between classes of css and get value from input

classSelectAptmedic = e => {
  if (e.target.value === "oui") {
    this.setState({
      isChooseAptmedic: "selected",
      [e.target.name]: e.target.value
    });
  } else
    this.setState({
      isChooseAptmedic: "notSelected",
      [e.target.name]: e.target.value,
      aptexpire:''
    });
};
// visaToggle & visaToggle1 function that get data from checkbox

visaToggle(index, e) {
  let newItems = this.state.visas.slice();
  newItems[index].checked = !newItems[index].checked;

  this.setState({ visas: newItems });
}
visaToggle1(index, e) {
  let newItems = this.state.visas.slice();
  newItems[index].expire = e.target.value;

  this.setState({ visas: newItems });
}


// send modifiying data to database
onEditPressed = () => {
  axios.put("/expertsList/" + this.props.id,{
        name: this.state.name,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email:this.state.email,
        visa:this.state.visa,
        carteSud:this.state.carteSud,
        aptMedicale:this.state.aptMedicale,
        carteexpire: this.state.carteexpire,
        aptexpire: this.state.aptexpire,
        education:this.state.education,
        expYear:this.state.expYear,
        experience:this.state.experience,
        dateDebut: this.state.dateDebut,
        dateFin: this.state.dateFin,
        expertiseArr:this.state.expertiseArr,
        certfiArr:this.state.certfiArr,
        visas:this.state.visas,
        isChooseVisa: this.state.isChooseVisa,
        isChooseCarteSud: this.state.isChooseCarteSud,
        isChooseAptmedic: this.state.isChooseAptmedic,
        presentation:this.state.presentation })
  this.setState({ isLoading: true}) // button animation
    setTimeout(() => {
      this.setState(() => ({
        isModified: true,
        isLoading: false,
      }));
    }, 1200)
}


  render() {
   
    return (
      this.state.isModified ? <Redirect to="/add/expertsList" /> :
      <div className="editProfileContainer">
        <div className="editProfileItems">
        <div className='editItem'>
            <label >Presentation:</label>
            <input
              className="editInput" 
              type="text"
              name="presentation"
              placeholder="Nom"
              onChange={this.onChange}
              value={this.state.presentation}
            />
            </div><br />
          <div className='editItem'>
            <label >Nom:</label>
            <input
              className="editInput" 
              type="text"
              name="name"
              placeholder="Nom"
              onChange={this.onChange}
              value={this.state.name}
            />
            </div><br />
            <div className='editItem'>
            <label style={{paddingRight:'10px'}}>Prenom:</label>
            <input
              className="editInput" 
              type="text"
              name="lastname"
              placeholder="Prenom"
              onChange={this.onChange}
              value={this.state.lastname}
            /></div> <br />
            <div className='editItem'>
            <label>Tél:</label>
            <input
              className="editInput" 
              type="text"
              name="phone"
              placeholder="Tél"
              onChange={this.onChange}
              value={this.state.phone}
              /></div> <br />
              <div className='editItem'>
              <label>Email:</label>
            <input
              className="editInput" 
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.onChange}
              value={this.state.email}
              /></div> <br />
              
             
              <div className='editItem'>
                <label className="modalLabel">Visa:</label>{" "}
                <select className='editInput' name='visa' onChange={this.classSelectVisa} value={this.state.visa}>
                  <option value="--">--</option>
                  <option value="oui">oui</option>
                  <option value="non">non</option>
                </select>
                </div>
                <div>
                  <div className={`${this.state.isChooseVisa}`}>
                    <ul>
                      {this.state.visas.map((item, i) => (
                        <li key={i} style={{display:'flex', justifyContent:'space-between',width:'400px',margin:'5px'}}>
                          <div>
                            <input type="checkbox" onChange={this.visaToggle.bind(this, i)} checked={item.checked}/>
                            <label>{item.value}</label>
                          </div>
                          <input type="date" className="calenderInput" onChange={this.visaToggle1.bind(this, i)} value={item.expire}/>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              
              <div className='editItem'>
                <label className="modalLabel">Carte Sud:</label>{" "}
                <select className='editInput' name='carteSud' onChange={this.classSelectCarteSud} value={this.state.carteSud}>
                  <option value="">--</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
                </div>
                <div>
                  <div className={`${this.state.isChooseCarteSud}`}>
                     <div>
                     <label className='modalLabel'>Expire le: </label> 
                     <input type="date" className="editInput" name="carteexpire" onChange={this.onChange} value={this.state.carteexpire}/>
                    </div>
                  </div>
                </div>
              
              <div className='editItem'>
                <label className="modalLabel">Aptitude médicale:</label>{" "}
                <select className="editInput" name='aptMedicale' onChange={this.classSelectAptmedic} value={this.state.aptMedicale}>
                  <option value="">--</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
                </div>
                <div>
                  <div className={`${this.state.isChooseAptmedic}`}>
                     <div>
                     <label className='modalLabel'>Expire le: </label> 
                     <input type="date" className="editInput" name="aptexpire" onChange={this.onChange} value={this.state.aptexpire}/>
                    </div>
                  </div>
                </div>
             <br />
              <div className='editItem'>
              <label>Education:</label>
            <textarea
              className="inputItemsarea" 
              type="text"
              name="education"
              placeholder="Education"
              onChange={this.onChange}
              value={this.state.education}
              /></div> <br />
              <div className='editItem'>
              <label>Années d'expérience:</label>
            <input
              className="editInput" 
              type="number"
              name="expYear"
              placeholder="Années d'expérience"
              onChange={this.onChange}
              value={this.state.expYear}
              /></div> <br />
              <div className='editItem'>
              <label>Experience:</label>
              <textarea
                className="inputItemsarea" 
                type="text"
                name="experience"
                placeholder="Experience"
                onChange={this.onChange}
                value={this.state.experience}
                /></div> <br />


                <div style={{display:'flex',}}>
                <div>
                  <label>Expertise:</label><br />
                  <div style={{display:'flex',}}>
                    <ul >
                        {this.state.expertiseArr.map((item, i) => (
                            <li className="labelStyle" key={i}>
                              <input 
                                className="checkStyle" 
                                type="checkbox" 
                                onChange={this.onToggle.bind(this, i)}
                                checked={item.checked}
                              />
                              <label>{item.value}{item.exps}</label>
                              
                            </li>
                          ))}
                      </ul>
                  </div>
                  </div>

                  <div>
                    <label>Certifications</label><br />
                    <div style={{display:'flex',}}>
                          <ul >
                          {this.state.certfiArr.map((ite, i) => (
                              <li className="labelStyle" key={i}>
                                <input 
                                  className="checkStyle"
                                  
                                  type="checkbox" 
                                  onChange={this.onToggleCertif.bind(this, i)}
                                  checked={ite.checked}
                                />
                                <label >{ite.value}</label>
                              </li>
                            ))}
                        </ul>
                    </div>
                  </div> 
              </div>
              </div>

              <Button color="primary" onClick={this.onEditPressed} style={{margin:'10px'}}>
                { !this.state.isLoading &&  <span> Modifier expert</span>}
                { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Modifier expert</span>}
              </Button>
              <Link  to='/add/expertsList'> 
                <Button color="secondary" style={{margin:'10px'}}>Annuler</Button> 
              </Link>
            
        </div>
      
    );
  }
}