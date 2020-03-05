import React, { Component } from 'react'
import axios from 'axios';
import ExpertCard from './expertCard'

// Search class to filter expert profile with name, lastname, expertise and certifications
export default class Search extends Component {
    // initial state
    state = { 
        profile:[], // initial variable to put extracting data from database named FalconData from collection named experts
        nom:'', // expert name
        prenom:'', // expert lastname
        filter:'',                    // all filter[i] variables corresponding to certification array and expertise array
        filter1:'',filter2:'',
        filter3:'',filter4:'',
        filter5:'',filter6:'',
        filter7:'',filter8:'',
        filter9:'',filter10:'',
        filter11:'',filter12:'',
        filter13:'',filter14:'',
        filter15:'',filter16:'',
        filter17:'',filter18:'',
        filter19:'', filter20:'',
        filter21:'', filter22:'',
        filter23:'', filter24:'', 
        filter25:'', filter26:'', 
        filter27:'', filter28:'', 
        filter29:'', filter30:'', 
        filter31:'', filter32:'', 
        filter33:'', filter34:'', 
        filter35:'', filter36:'', 
        filter37:'', filter38:'', 
        filter39:'', filter40:'', 
        filter41:'', filter42:'', 
        filter43:'',
        filtercertif:'',
        array:[],
        aray:[],
        filterC:''
    }
    getexpertises(){
        axios.get('/expertise').then(res=> this.setState({
          array:res.data
        }))
    
      }
      getcertificates(){
        axios.get('/certifs').then(res=> this.setState({
          aray:res.data
        }))
    
      }

    // componentDidMount get data from database
    componentDidMount () {
        this.getexpertises();
        this.getcertificates();
        axios
        .get("/expertsList")
        .then(res => this.setState({
            profile : res.data  // get all data from data base named FalconData from collection named experts
        }))
        .catch(err =>console.log("err", err))
      }

      // onChangeSearch get value of name input search
      onChangeSearch = (e) => {
        this.setState({
            filter: e.target.value,  // filter variable corresponding to name
            
     });
   };
         // onChangeSearch1 get value of lastname input search

      onChangeSearch1 = (e) => {
        this.setState({
            
            filter1: e.target.value // filter variable corresponding to lastname
     });
   };

   // function named filterHandler[i] to get value of selected checkbox 
   filterHandler = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter2: val}) : this.setState({filter2: ""})} 
   // filter2 variable corresponding to Inspecteur NDT MT 
   filterHandler1 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter3: val}) : this.setState({filter3: ""})} 
   // filter3 variable corresponding to Inspecteur NDT PT 
   filterHandler2 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter4: val}) : this.setState({filter4: ""})} 
   // filter4 variable corresponding to Inspecteur NDT UT 
   filterHandler3 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter5: val}) : this.setState({filter5: ""})} 
   // filter5 variable corresponding toInspecteur NDT MT 
   filterHandler4 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter6: val}) : this.setState({filter6: ""})} 
   // filter6 variable corresponding to Inspecteur NDT PT
   filterHandler5 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter7: val}) : this.setState({filter7: ""})} 
   // filter7 variable corresponding to Inspecteur NDT UT
   filterHandler6 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter8: val}) : this.setState({filter8: ""})} 
   // filter8 variable corresponding to Inspecteur NDT RT
   filterHandler7 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter9: val}) : this.setState({filter9: ""})} 
   // filter9 variable corresponding to Inspecteur NDT VT 
   filterHandler8 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter10: val}) : this.setState({filter10: ""})} 
   // filter10 variable corresponding to Inspecteur Peinture  
   filterHandler9 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter11: val}) : this.setState({filter11: ""})} 
   // filter11 variable corresponding to Inspecteur en soudage 
   filterHandler10 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter12: val}) : this.setState({filter12: ""})} 
   // filter12 variable corresponding to Inspecteur en levage
   filterHandler11 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter13: val}) : this.setState({filter13: ""})} 
   // filter13 variable corresponding to Inspecteur installation éléctrique
   filterHandler12 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter14: val}) : this.setState({filter14: ""})} 
   // filter14 variable corresponding to Inspecteur installation de gaz 
   filterHandler13 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter15: val}) : this.setState({filter15: ""})} 
   // filter15 variable corresponding to Inspecteur appareil à pression 
   filterHandler14 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter16: val}) : this.setState({filter16: ""})} 
   // filter16 variable corresponding to Expert Technique 
   filterHandler15 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter17: val}) : this.setState({filter17: ""})} 
   // filter17 variable corresponding to Inspecteur protection cathodique 
   filterHandler16 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter18: val}) : this.setState({filter18: ""})} 
   // filter18 variable corresponding to Inspecteur storage tank
   filterHandler17 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter19: val}) : this.setState({filter19: ""})} 
   // filter19 variable corresponding Inspecteur pipeline
   filterHandler18 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter20: val}) : this.setState({filter20: ""})} 
   // filter20 variable corresponding to Inspecteur incendie
   filterHandler19 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter21: val}) : this.setState({filter21: ""})} 
   // filter21 variable corresponding to API 510
   filterHandler20 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter22: val}) : this.setState({filter22: ""})} 
   // filter22 variable corresponding to API 653  
   filterHandler21 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter23: val}) : this.setState({filter23: ""})} 
   // filter23 variable corresponding to API 570
   filterHandler22 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter24: val}) : this.setState({filter24: ""})} 
   // filter24 variable corresponding to API 580 
   filterHandler23 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter25: val}) : this.setState({filter25: ""})} 
   // filter25 variable corresponding to API 1169
   filterHandler24 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter26: val}) : this.setState({filter26: ""})} 
   // filter26 variable corresponding to CSWIP
   filterHandler25 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter27: val}) : this.setState({filter27: ""})} 
   // filter27 variable corresponding to CSWIP BGAS
   filterHandler26 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter28: val}) : this.setState({filter28: ""})} 
   // filter28 variable corresponding to IWE 
   filterHandler27 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter29: val}) : this.setState({filter29: ""})} 
   // filter29 variable corresponding to CWE 
   filterHandler28 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter30: val}) : this.setState({filter30: ""})} 
   // filter30 variable corresponding to NACE CP1 
   filterHandler29 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter31: val}) : this.setState({filter31: ""})} 
   // filter31 variable corresponding to NACE CP2 
   filterHandler30 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter32: val}) : this.setState({filter32: ""})} 
   // filter32 variable corresponding to NACE CP3
   filterHandler31 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter33: val}) : this.setState({filter33: ""})} 
   // filter33 variable corresponding to ASNT III
   filterHandler32 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter34: val}) : this.setState({filter34: ""})} 
   // filter34 variable corresponding to COTEND I  
   filterHandler33 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter35: val}) : this.setState({filter35: ""})} 
   // filter35 variable corresponding to COTENDII 
   filterHandler34 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter36: val}) : this.setState({filter36: ""})} 
   // filter36 variable corresponding to COTEND III
   filterHandler35 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter37: val}) : this.setState({filter37: ""})} 
   // filter37 variable corresponding to COFREND I 
   filterHandler36 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter38: val}) : this.setState({filter38: ""})} 
   // filter38 variable corresponding to COFREND II 
   filterHandler37 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter39: val}) : this.setState({filter39: ""})} 
   // filter39 variable corresponding to COFREND III 
   filterHandler38 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter40: val}) : this.setState({filter40: ""})} 
   // filter40 variable corresponding to CNPP 
   filterHandler39 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter41: val}) : this.setState({filter41: ""})} 
   // filter41 variable corresponding NACE CIP I 
   filterHandler40 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; checked === true ? this.setState({filter42: val}) : this.setState({filter42: ""})} 
   // filter42 variable corresponding to NACE CIP II  
   filterHandler41 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; if(checked=== true){this.setState({filter43: val})}else{this.setState({filter43:''})} } 
   // filter43 variable corresponding to NACE CIP III  
   
   NewCertif(evt){
    let checked = evt.target.checked;
    let val = evt.target.value;
    if(checked=== true){this.setState({filtercertif: val})}else{this.setState({filtercertif:''})}
}
NewCert(evt){
    let checked = evt.target.checked;
    let val = evt.target.value;
    if(checked=== true){this.setState({filterC: val})}else{this.setState({filterC:''})}
}
   // onPressDelete function that delete an expert 
   onPressDelete= (id)=> {
    axios.delete("/expertsList/" + id).then(res => {
                this.setState({
        profile: this.state.profile.filter(el => el._id !== id)
      })
    });
    } 
    filterHandler101 = (evt) => { let checked = evt.target.checked; let val = evt.target.value; if(checked=== true){this.setState({filtercertif: val})}else{this.setState({filtercertif:''})} }
    render() {


    
    const { filter, profile, filter1, filter2, filter3, filter4, filter5, filter6, filter7, filter8, filter9, filter10, filter11, filter12, filter13, filter14, filter15, filter16, filter17, filter18, 
        filter19, filter20, filter21, filter22, filter23, filter24, filter25, filter26, filter27, filter28, filter29, filter30, filter31, filter32, filter33, filter34, filter35, filter36, filter37, 
        filter38, filter39, filter40, filter41, filter42, filter43,filtercertif,filterC
          } = this.state;

    const lowercasedFilter = filter.toLowerCase();
    const lowercasedFilter1 = filter1.toLowerCase();
    
    

    const filteredData = profile.filter((item, i) => {
        
      return ( (item.name.toLowerCase().includes(lowercasedFilter) || !filter) 
        && (item.lastname.toLowerCase().includes(lowercasedFilter1) || !filter1) 
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter2) || !filter2)  
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter3) || !filter3) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter4) || !filter4) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter5) || !filter5) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter6) || !filter6) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter7) || !filter7) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter8) || !filter8) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter9) || !filter9) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter10) || !filter10) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter11) || !filter11) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter12) || !filter12) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter13) || !filter13) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter14) || !filter14) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter15) || !filter15) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter16) || !filter16) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter17) || !filter17) 
        // filter expertise array with selected variable from checkbox
        
        && (item.expertiseArr.filter(item => item.checked).map(el => el.value).includes(filter18) || !filter18) 
        // filter expertise array with selected variable from checkbox
        && (item.expertiseArr.filter(item => item.checked).map(el => el.exps).includes(filtercertif) || !filtercertif)
        // && (item.certifArr.filter(item => item.checked).map(el => el.value).includes(filterC) || !filterC)
        
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter19) || !filter19)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filterC) || !filterC)
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter20) || !filter20)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter21) || !filter21)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter22) || !filter22)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter23) || !filter23)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter24) || !filter24)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter25) || !filter25)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter26) || !filter26)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter27) || !filter27)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter28) || !filter28)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter29) || !filter29)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter30) || !filter30)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter31) || !filter31)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter32) || !filter32)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter33) || !filter33)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter34) || !filter34)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter35) || !filter35)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter36) || !filter36)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter37) || !filter37)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter38) || !filter38)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter39) || !filter39)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter40) || !filter40)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter41) || !filter41)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter42) || !filter42)
        // filter certif array called certifArr with selected variable from checkbox
        && (item.certfiArr.filter(item => item.checked).map(el => el.value).includes(filter43) || !filter43)
        // filter certif array called certifArr with selected variable from checkbox
      
      )
    });
    

    
        return (
            <div >
            <div style={{display:'flex'}}>
            <div className="inputSyle">
               <label style={{color:'white', fontWeight:'bold'}}>Chercher Nom expert</label> 
               <input type="text" name="nom" onChange={this.onChangeSearch} value={filter}/>

               <label style={{color:'white', fontWeight:'bold', marginLeft:'55px'}}>Chercher Prenom expert</label>
                <input type="text" name="prenom" onChange={this.onChangeSearch1} value={filter1}/>

            </div>
            <div style={{display:'flex', marginTop: '70px'}}>
                <div >
                <button style={{margin:'10px'}} class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Expertise</button>

                        <div class="dropdown-menu">
                            
                            {this.state.array.map((el,_id)=>(
                                <div>
                                <a class="dropdown-item">
                                <div class="custom-control custom-checkbox">
                                    <input key={_id} type="checkbox" class="custom-control-input" value={el.exps} id={el._id} onChange={this.NewCertif.bind(this)}/>
                            <label class="custom-control-label" for={el._id} >{el.exps}</label>

                                </div>
                                </a>
                                </div>
                            ))}
                         
                            

                            <a class="dropdown-item">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox1" value='Inspecteur NDT MT' onChange={this.filterHandler} />
                                <label class="custom-control-label" for="checkbox1">Inspecteur NDT MT</label>
                            </div>
                            </a>
                             <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox2" value="Inspecteur NDT PT" onChange={this.filterHandler1} />
                                <label class="custom-control-label" for="checkbox2">Inspecteur NDT PT</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox3" value="Inspecteur NDT UT" onChange={this.filterHandler2}/>
                                <label class="custom-control-label" for="checkbox3">Inspecteur NDT UT</label>
                            </div>
                            </a>
                            
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox4" value="Inspecteur NDT RT" onChange={this.filterHandler3}/>
                                <label class="custom-control-label" for="checkbox4">Inspecteur NDT RT</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox5" value="Inspecteur NDT VT" onChange={this.filterHandler4}/>
                                <label class="custom-control-label" for="checkbox5">Inspecteur NDT VT</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox6" value="Inspecteur Peinture" onChange={this.filterHandler5}/>
                                <label class="custom-control-label" for="checkbox6">Inspecteur Peinture</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox7" value="Inspecteur en soudage" onChange={this.filterHandler6}/>
                                <label class="custom-control-label" for="checkbox7">Inspecteur en soudage</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox8" value="Inspecteur en levage" onChange={this.filterHandler7}/>
                                <label class="custom-control-label" for="checkbox8">Inspecteur en levage</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox9" value="Inspecteur installation élèctrique" onChange={this.filterHandler8}/>
                                <label class="custom-control-label" for="checkbox9">Inspecteur installation éléctrique</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox10" value="Inspecteur installation de gaz" onChange={this.filterHandler9}/>
                                <label class="custom-control-label" for="checkbox10">Inspecteur installation de gaz</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox11" value="Inspecteur appareil à pression" onChange={this.filterHandler10}/>
                                <label class="custom-control-label" for="checkbox11">Inspecteur appareil à pression</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox12" value="Expert Technique" onChange={this.filterHandler11}/>
                                <label class="custom-control-label" for="checkbox12">Expert Technique</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox13" value="Inspecteur protection cathodique" onChange={this.filterHandler12}/>
                                <label class="custom-control-label" for="checkbox13">Inspecteur protection cathodique</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox14" value="Expert RBI" onChange={this.filterHandler13}/>
                                <label class="custom-control-label" for="checkbox14">Expert RBI</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox15" value="Inspecteur storage tank" onChange={this.filterHandler14}/>
                                <label class="custom-control-label" for="checkbox15">Inspecteur storage tank</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox16" value="Inspecteur pipeline" onChange={this.filterHandler15}/>
                                <label class="custom-control-label" for="checkbox16">Inspecteur pipeline</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox17" value="Inspecteur incendie" onChange={this.filterHandler16}/>
                                <label class="custom-control-label" for="checkbox17">Inspecteur incendie</label>
                            </div>
                            </a> 
                        </div>
                        
                        </div>


                        <div>
                        <button style={{margin:'10px'}} class="btn btn-danger dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Certifications</button>


                        




                        <div class="dropdown-menu">
                            
                        {this.state.aray.map((ell,_id)=>(
                                <div >
                                <a class="dropdown-item">
                                <div class="custom-control custom-checkbox">
                                    <input key={_id} type="checkbox" class="custom-control-input" value={ell.value} id={ell._id} onChange={this.NewCert.bind(this)}/>
                            <label class="custom-control-label" for={ell._id} >{ell.value}</label>

                                </div>
                                </a>
                                </div>
                            ))}
                            
                            <a class="dropdown-item">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox18" value="API 510" onChange={this.filterHandler17}/>
                                <label class="custom-control-label" for="checkbox18">API 510</label>
                            </div>
                            </a>
                           

                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox19" value="API 653" onChange={this.filterHandler18}/>
                                <label class="custom-control-label" for="checkbox19">API 653</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox20" value="API 570" onChange={this.filterHandler19}/>
                                <label class="custom-control-label" for="checkbox20">API 570</label>
                            </div>
                            </a>
                            
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox21" value="API 580" onChange={this.filterHandler20}/>
                                <label class="custom-control-label" for="checkbox21">API 580</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox22" value="API 1169" onChange={this.filterHandler21}/>
                                <label class="custom-control-label" for="checkbox22">API 1169</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox23" value="CSWIP" onChange={this.filterHandler22}/>
                                <label class="custom-control-label" for="checkbox23">CSWIP</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox24" value="CSWIP BGAS" onChange={this.filterHandler23}/>
                                <label class="custom-control-label" for="checkbox24">CSWIP BGAS</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox25" value="IWE" onChange={this.filterHandler24}/>
                                <label class="custom-control-label" for="checkbox25">IWE</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox26" value="CWI" onChange={this.filterHandler25}/>
                                <label class="custom-control-label" for="checkbox26">CWI</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox27" value="CWE" onChange={this.filterHandler26}/>
                                <label class="custom-control-label" for="checkbox27">CWE</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox28" value="NACE CP1" onChange={this.filterHandler27}/>
                                <label class="custom-control-label" for="checkbox28">NACE CP1</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox29" value="NACE CP2" onChange={this.filterHandler28}/>
                                <label class="custom-control-label" for="checkbox29">NACE CP2</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox30" value="NACE CP3" onChange={this.filterHandler29}/>
                                <label class="custom-control-label" for="checkbox30">NACE CP3</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox31" value="ASNT II" onChange={this.filterHandler30}/>
                                <label class="custom-control-label" for="checkbox31">ASNT II</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox32" value="ASNT III" onChange={this.filterHandler31}/>
                                <label class="custom-control-label" for="checkbox32">ASNT III</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox33" value="COTEND I" onChange={this.filterHandler32}/>
                                <label class="custom-control-label" for="checkbox33">COTEND I</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox34" value="COTEND II" onChange={this.filterHandler33}/>
                                <label class="custom-control-label" for="checkbox34">COTENDII</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox35" value="COTEND III" onChange={this.filterHandler34}/>
                                <label class="custom-control-label" for="checkbox35">COTEND III</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox36" value="COFREND I" onChange={this.filterHandler35}/>
                                <label class="custom-control-label" for="checkbox36">COFREND I</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox37" value="COFREND II" onChange={this.filterHandler36}/>
                                <label class="custom-control-label" for="checkbox37">COFREND II</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox38" value="COFREND III" onChange={this.filterHandler37}/>
                                <label class="custom-control-label" for="checkbox38">COFREND III</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox39" value="CNPP" onChange={this.filterHandler38}/>
                                <label class="custom-control-label" for="checkbox39">CNPP</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox40" value="NACE CIP I" onChange={this.filterHandler39}/>
                                <label class="custom-control-label" for="checkbox40">NACE CIP I</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox41" value="NACE CIP II" onChange={this.filterHandler40}/>
                                <label class="custom-control-label" for="checkbox41">NACE CIP II</label>
                            </div>
                            </a>
                            <a class="dropdown-item" href="#">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="checkbox42" value="NACE CIP III" onChange={this.filterHandler41}/>
                                <label class="custom-control-label" for="checkbox42">NACE CIP III</label>
                            </div>
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

                {filteredData.map((el, i) =>{
                    return  <ExpertCard key={i} expert={el} onPressDelete={this.onPressDelete} key={el._id}/>  
                    
                })
            } 
            </div>
        )
    }
}