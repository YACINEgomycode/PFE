import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


// modal class for adding new expert 
import './modal.css'
class ModalExample extends React.Component {
  // initial state 
  constructor(props) {
    super(props);
    this.state = {
     choosencertifs:[],
      isLoading: false, // variable pour l'animation du button 
      modal: false,
      name: "",// nom d'expert
      lastname: "",// prénom d'expert
      phone: "",// numéro portable d'expert
      email:"",// email expert
      visa:"",// visa expert
      carteSud:"",// carte sud 
      aptMedicale:'',// aptitude médicale
      visaExpire:'',// date d'expiration visa 
      carteexpire:'',// date d'expiration carte sud
      aptexpire:'',// date d'expiration aptitude médicale
      education:'',// parcours universitaire
      experience:"",// à propos expérince
      expertiseArr:[ // array for 'expertise' 
        {
          id: 1,
          value: "Inspecteur NDT MT",
          checked: false
        },
        {
          id: 2,
          value: "Inspecteur NDT PT",
          checked: false
        },
        {
          id: 3,
          value: "Inspecteur NDT UT",
          checked: false
        },
        {
          id: 4,
          value: "Inspecteur NDT RT",
          checked: false
        },
        {
          id: 5,
          value: "Inspecteur NDT VT",
          checked: false
        },
        {
          id: 6,
          value: "Inspecteur Peinture",
          checked: false
        },
        {
          id: 7,
          value: "Inspecteur en Soudage",
          checked: false
        },
        {
          id: 8,
          value: "Inspecteur en Levage",
          checked: false
        },
        
        {
          id: 10,
          value: "Inspecteur installation élèctrique",
          checked: false
        },
        {
          id: 11,
          value: "Inspecteur installation de gaz",
          checked: false
        },
        {
          id: 12,
          value: "Inspecteur appareil à pression",
          checked: false
        },
        {
          id: 13,
          value: "Expert Technique",
          checked: false
        },
        {
          id: 14,
          value: "Inspecteur protection cathodique",
          checked: false
        },
        {
          id: 15,
          value: "Expert RBI",
          checked: false
        },
        {
          id: 16,
          value: "Inspecteur storage tank",
          checked: false
        },
        {
          id: 17,
          value: "Inspecteur pipeline",
          checked: false
        },
        {
          id: 18,
          value: "Inspecteur incendie",
          checked: false
        },
      ],
      certfiArr:[ // array for certifications
        {
          id: 20,
          value: "API 510",
          checked: false
        },
        {
          id: 21,
          value: "API 653",
          checked: false
        },
        {
          id: 22,
          value: "API 570",
          checked: false
        },
        {
          id: 23,
          value: "API 1169",
          checked: false
        },
        {
          id: 24,
          value: "API 580",
          checked: false
        },
        {
          id: 25,
          value: "CSWIP",
          checked: false
        },
        {
          id: 26,
          value: "CSWIP BGAS",
          checked: false
        },
        {
          id: 27,
          value: "IWE",
          checked: false
        },
        {
          id: 28,
          value: "CWI",
          checked: false
        },
        {
          id: 29,
          value: "CWE",
          checked: false
        },
        {
          id: 30,
          value: "NACE CP1",
          checked: false
        },
        {
          id: 31,
          value: "NACE CP2",
          checked: false
        },
        {
          id: 32,
          value: "NACE CP3",
          checked: false
        },
        {
          id: 33,
          value: "ASNT II",
          checked: false
        },
        {
          id: 34,
          value: "ASNT III",
          checked: false
        },
        {
          id: 35,
          value: "COTEND I",
          checked: false
        },
        {
          id: 36,
          value: "COTEND II",
          checked: false
        },
        {
          id: 37,
          value: "COTEND III",
          checked: false
        },
        {
          id: 38,
          value: "COFREND I",
          checked: false
        },
        {
          id: 39,
          value: "COFREND II",
          checked: false
        },
        {
          id: 40,
          value: "COFREND III",
          checked: false
        },
        {
          id: 41,
          value: "CNPP",
          checked: false
        },
        {
          id: 42,
          value: "NACE CIP I",
          checked: false
        },
        {
          id: 43,
          value: "NACE CIP II",
          checked: false
        },
        {
          id: 44,
          value: "NACE CIP III",
          checked: false
        },
      ],
      visaArr:[],
      visaName: "",
      expireDate: "",
      arr:[],
      visas:[ // array for visas
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
      isChooseVisa: "notSelected",
      isChooseCarteSud: "notSelected",
      isChooseAptmedic: "notSelected",
      chooseVisa: "notSelectedVisa",
      chooseVisa1: "notSelectedVisa1",
      chooseVisa2: "notSelectedVisa2",
      chooseVisa3: "notSelectedVisa3",
      exp:[],
      try:"",
      dd:"",
      presentation:"",
    };

    this.toggle = this.toggle.bind(this); // close modal after adding new expert
  }


  // toggle get state empty after adding an expert, close modal after add expert 
  toggle() {
    // clear state 
    this.setState(prevState => ({
      modal: !prevState.modal,
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
      expertiseArr:[
        {
          id: 1,
          value: "Inspecteur NDT MT",
          checked: false
        },
        {
          id: 2,
          value: "Inspecteur NDT PT",
          checked: false
        },
        {
          id: 3,
          value: "Inspecteur NDT UT",
          checked: false
        },
        {
          id: 4,
          value: "Inspecteur NDT RT",
          checked: false
        },
        {
          id: 5,
          value: "Inspecteur NDT VT",
          checked: false
        },
        {
          id: 6,
          value: "Inspecteur Peinture",
          checked: false
        },
        {
          id: 7,
          value: "Inspecteur en Soudage",
          checked: false
        },
        {
          id: 8,
          value: "Inspecteur en Levage",
          checked: false
        },
        
        {
          id: 10,
          value: "Inspecteur installation élèctrique",
          checked: false
        },
        {
          id: 11,
          value: "Inspecteur installation de gaz",
          checked: false
        },
        {
          id: 12,
          value: "Inspecteur appareil à pression",
          checked: false
        },
        {
          id: 13,
          value: "Expert Technique",
          checked: false
        },
        {
          id: 14,
          value: "Inspecteur protection cathodique",
          checked: false
        },
        {
          id: 15,
          value: "Expert RBI",
          checked: false
        },
        {
          id: 16,
          value: "Inspecteur storage tank",
          checked: false
        },
        {
          id: 17,
          value: "Inspecteur pipeline",
          checked: false
        },
        {
          id: 18,
          value: "Inspecteur incendie",
          checked: false
        },
      ],
      certfiArr:[
        {
          id: 20,
          value: "API 510",
          checked: false
        },
        {
          id: 21,
          value: "API 653",
          checked: false
        },
        {
          id: 22,
          value: "API 570",
          checked: false
        },
        {
          id: 23,
          value: "API 1169",
          checked: false
        },
        {
          id: 24,
          value: "API 580",
          checked: false
        },
        {
          id: 25,
          value: "CSWIP",
          checked: false
        },
        {
          id: 26,
          value: "CSWIP BGAS",
          checked: false
        },
        {
          id: 27,
          value: "IWE",
          checked: false
        },
        {
          id: 28,
          value: "CWI",
          checked: false
        },
        {
          id: 29,
          value: "CWE",
          checked: false
        },
        {
          id: 30,
          value: "NACE CP1",
          checked: false
        },
        {
          id: 31,
          value: "NACE CP2",
          checked: false
        },
        {
          id: 32,
          value: "NACE CP3",
          checked: false
        },
        {
          id: 33,
          value: "ASNT II",
          checked: false
        },
        {
          id: 34,
          value: "ASNT III",
          checked: false
        },
        {
          id: 35,
          value: "COTEND I",
          checked: false
        },
        {
          id: 36,
          value: "COTEND II",
          checked: false
        },
        {
          id: 37,
          value: "COTEND III",
          checked: false
        },
        {
          id: 38,
          value: "COFREND I",
          checked: false
        },
        {
          id: 39,
          value: "COFREND II",
          checked: false
        },
        {
          id: 40,
          value: "COFREND III",
          checked: false
        },
        {
          id: 41,
          value: "CNPP",
          checked: false
        },
        {
          id: 42,
          value: "NACE CIP I",
          checked: false
        },
        {
          id: 43,
          value: "NACE CIP II",
          checked: false
        },
        {
          id: 44,
          value: "NACE CIP III",
          checked: false
        },
      ],
      presentation:""
      
    }));
  }
  // onChange get value from input
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


// onToggle & onToggleCertif function that get data from checkbox

  onToggle(index, e) {
    let newItems = this.state.expertiseArr.slice();
    newItems[index].checked = !newItems[index].checked;

    this.setState({ expertiseArr: newItems });
    console.log('data',this.state.expertiseArr)
  }

  onToggleCertif(index, e) {
    let newItems = this.state.certfiArr.slice();
    newItems[index].checked = !newItems[index].checked;

    this.setState({ certfiArr: newItems });
    console.log('data',this.state.certfiArr)
  }
// classSelectVisa function that toggle between classes of css and get value from input
NewCertif(index,e){
 
    let newIts = this.state.arr.slice();
    if(newIts[index].checked = true)
    

    this.setState({  choosencertifs: newIts });
    console.log('data',this.state.arr)
  
}
classSelectVisa = e => {
  if (e.target.value === 'oui') {
    this.setState({
      isChooseVisa: "selected",
      [e.target.name]: e.target.value
    });
  } else
    this.setState({
      isChooseVisa: "notSelected",
      [e.target.name]: e.target.value
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
      [e.target.name]: e.target.value
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
      [e.target.name]: e.target.value
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

// onAddExpert function that send data to database
  onAddExpert = () =>{
    this.setState({ isLoading: true})
    setTimeout(() => {
      this.setState(prevState => ({
        modal: !prevState.modal,
        isLoading: false,
      }));
    }, 1200)

    axios
      .post("/add",{  // envoyer les données récupérées a la base de données au chemin /add
        name: this.state.name,
        lastname: this.state.lastname,
        phone: this.state.phone,
        email:this.state.email,
        visa:this.state.visa,
        carteSud:this.state.carteSud,
        aptMedicale:this.state.aptMedicale,
        visaExpire:this.state.visaExpire,
        carteexpire:this.state.carteexpire,
        aptexpire:this.state.aptexpire,
        education:this.state.education,
        expYear:this.state.expYear,
        experience:this.state.exp,
        dateDebut:this.state.dateDebut,
        dateFin: this.state.dateFin,
        expertiseArr: this.state.expertiseArr,
        certfiArr: this.state.certfiArr.concat( this.state.choosencertifs),
        visas:this.state.visas,
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
        isChooseVisa: this.state.isChooseVisa,
        isChooseCarteSud: this.state.isChooseCarteSud,
        isChooseAptmedic: this.state.isChooseAptmedic,
        presentation:this.state.presentation
        })
      .then(res => axios.get("/expertsList") 
      //.then(res => this.props.updateExpertList(res.data))
      )
      .catch(err => alert(err));
  }

  getcertifs(){
    axios.get('/certifs').then(res=> this.setState({
      arr:res.data
    }))
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      try: '',
      dd:'',
      exp: [...this.state.exp  ,  "\n" +this.state.dd + ":"+"\n" + this.state.try+ "\n"]
    });
  }
  render() {
    
    return (
      <div>
        <button className="homeButton" onClick={() => {
    this.toggle();
            this.getcertifs();
            }}>Ajouter expert</button>
        <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Ajouter un expert</ModalHeader>
          <ModalBody>
            
            <div>
            <div className="modalInput">
                <label className='modalLabel'>Présentation:</label>
                <textarea cols="20" className="inputItemsareaa" type="text" name="presentation" onChange={this.onChange} ></textarea>
              </div>


              <div className="modalInput">
                <label className='modalLabel'>Nom:</label>
                <input className="inputItems" type="text" name="name"  onChange={this.onChange}/>
              </div>
              <div className="modalInput">
                <label className='modalLabel'>Prénom:</label>
                <input className="inputItems" type="text" name="lastname"  onChange={this.onChange}/>
                </div>
              <div className="modalInput">
                <label className='modalLabel'>Tel:</label>
                <input className="inputItems" type="number" name="phone"onChange={this.onChange}/>
              </div>
              <div className="modalInput">
                <label className='modalLabel'>Email:</label>
                <input className="inputItems" type="email" name="email"onChange={this.onChange}/>
              </div>
              <div className="modalInput">
                <label className="modalLabel">Visa:</label>{" "}
                <select name='visa' onChange={this.classSelectVisa}>
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
                              <input className="test" type="checkbox" onChange={this.visaToggle.bind(this, i)} />
                              <label>{item.value}</label>
                            </div>
                            <input type="date" className="calenderInput" onChange={this.visaToggle1.bind(this, i)} />
                          </li>
                        ))}
                      </ul>
                  </div>
              </div>
              <div className="modalInput">
                <label className="modalLabel">Carte Sud:</label>{" "}
                <select name='carteSud' onChange={this.classSelectCarteSud}>
                  <option value="">--</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
                </div>
                <div>
                  <div className={`${this.state.isChooseCarteSud}`}>
                     <div>
                     <label className='modalLabel expire'>Expire le: </label> 
                     <input type="date" className="calenderInput" name="carteexpire" onChange={this.onChange}/>
                    </div>
                  </div>
                </div>              
              <div className="modalInput">
                <label className="modalLabel">Aptitude médicale:</label>{" "}
                <select name='aptMedicale' onChange={this.classSelectAptmedic}>
                  <option value="">--</option>
                  <option value="oui">Oui</option>
                  <option value="non">Non</option>
                </select>
                </div>
                <div>
                  <div className={`${this.state.isChooseAptmedic}`}>
                     <div>
                     <label className='modalLabel expire'>Expire le: </label> 
                     <input type="date" className="calenderInput" name="aptexpire" onChange={this.onChange}/>
                    </div>
                  </div>
                </div>
              
<div className="modalInput">
                <label className='modalLabel'>Education:</label>
                <textarea className="inputItemsareaa" type="text" placeholder="please specify the date and the period" name="education"onChange={this.onChange}></textarea>
              </div>
<div className="modalInput">
                <label className='modalLabel'>Annés d'expérience:</label>
                <input className="inputItems" type="number" name="expYear"onChange={this.onChange}/>
              </div>                
              <label className='modalLabel' >Experience:</label>
<div className="modalInput">
             <label className='modalLabel' >Date d'expérience:</label>
            <input className="inputItems" type="date" name="dd" value={this.state.dd} onChange={this.onChange}></input></div>
<div className="modalInput">
<label className='modalLabel' >Experience aquise:</label>
<input className="inputItems" type="text" name="try" value={this.state.try} onChange={this.onChange}></input>
</div>
<div className="modalInput">
<Button  color="info" onClick={this.onSubmit}>ajouter une expérience</Button>
  <textarea cols="20" className="inputItemsareaa" type="text" name="experience" value={this.state.exp} ></textarea>
  </div>
                         
            </div>
            <div style={{display:'flex', justifyContent:'space-between'}}>
              <div>
                <label style={{fontWeight:'bold'}}>Champs d'expertise:</label>
                  <div className="modalexpertise">   
                    <ul>
                      {this.state.expertiseArr.map((item, i) => (
                        <li key={i}>
                          <input className="test" type="checkbox" onChange={this.onToggle.bind(this, i)} />
                          <label>{item.value}</label>
                        </li>
                      ))}
                    </ul> 
                  </div>
              </div>
  
              <div>
                <label style={{fontWeight:'bold'}}>Certifications</label>
                    
                  <div className="modalexpertise">
                    <ul>
                      {this.state.certfiArr.map((item, i) => (
                        <li key={i}>
                          <input className="test" type="checkbox" onChange={this.onToggleCertif.bind(this, i)}/>
                          <label>{item.value}</label>
                        </li>
                      ))}
                    </ul> 
                    <ul>
                      {this.state.arr.map((it,_id)=>(
                        <li key={_id}> <input className="test" type="checkbox" onChange={this.NewCertif.bind(this,_id)}/>
                        <label>{it.value}</label></li>
                      ))}
                    </ul>
                  </div>
                  
              </div>
              </div>
            
         
            
          </ModalBody>
          <ModalFooter>
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick={()=> {this.onAddExpert(); }}
          >
        { !this.state.isLoading &&  <span> Ajouter un expert</span>}
        { this.state.isLoading &&  <span><i className="fas fa-circle-notch fa-spin"></i> Ajouter un expert</span>}
    
    </Button>
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;