import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import axios from 'axios';
import "../missions/ordreMission.css"
// modal class for adding new expert 
import '../ressources/modal.css'
import Select from 'react-select'

class Article extends React.Component {
  // initial state 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // variable pour l'animation du button 
      modal: false,
      type: "",
      fonction:  "",
      CodeFonction:  "",
      constructeur:  "",
      NumSerie: "",
      DateEtalonnage: "",
      DateExp: "",
      Manuel: "",
      EtatPhy:  "",
      LieuStockage:  "",
      Quantite: "",
      Statut:"",
      Equ:[],
      fun:[
          {name:"Consommable"},
          {name:"Equipement"},
          {name:"Kit"},
          
      ],
      aa:false,
      bb:false,
      ref:"",
      NbrTotalArt :  [],
        NbrTotalStock:[],
        NbrTotalHors : [],
        Reference: '',
        productImage:'',
        article:[],
        try:[],
        valuee:[],
        multiValue: [],
        filterOptions: [],
        selectedOption: null,
        nom_kit:"",
        code_kit:"",
        contenu_kit:[],
    }
    this.onFileChange = this.onFileChange.bind(this);
    this.toggle = this.toggle.bind(this); // close modal after adding new expert
  }




  onFormSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('productImage',this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };}
  // toggle get state empty after adding an expert, close modal after add expert 
  toggle() {
    // clear state 
    this.setState(prevState => ({
      modal: !prevState.modal,
      
    }));
  }
  // onChange get value from input
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
    }); 
};
 
affichage =()=>{
  if(this.state.fonction != 'Kit')
  this.setState({
bb:false,
  })
  else if(this.state.fonction = 'Kit')
  this.setState({
    bb:true,
      })
 
}


change =()=>{
    if(this.state.fonction=="Consommable")
    this.setState({
aa:false,

    })
    else 
    this.setState({
        aa:true,
            })
          
}


getEquipments(){
  axios.get('/equipments').then(res=> this.setState({
    Equ:res.data
  }))
  
}

getarticle() {
  axios
  .get("/articles")
  .then(res => this.setState({
      article : res.data    // get data from database named FalconData and put all data in variable called profile
  }))
  .catch(err =>console.log("err", err))
}

test=()=>{
  let userList = [];
  this.state.Equ.map((el)=> {
    userList.push({
      label: el.equipmentName,
      value: el.equipmentCode
    });
  })
  this.setState({
    filterOptions: userList
  });
}

onFileChange(e) {
  this.setState({ productImage: e.target.files[0],
   })
}

AddArticle = () =>{
  
    this.setState({ isLoading: true})
    setTimeout(() => {
      this.setState(prevState => ({
        modal: !prevState.modal,
        isLoading: false,
      }));
    }, 1200)
    const formData = new FormData()
    formData.append('productImage', this.state.productImage)
    formData.append('type', this.state.type)
    formData.append('fonction', this.state.fonction)
    formData.append('CodeFonction', this.state.CodeFonction)
    formData.append('constructeur', this.state.constructeur)
    formData.append('NumSerie', this.state.NumSerie)
    formData.append('DateEtalonnage', this.state.DateEtalonnage)
    formData.append('DateExp', this.state.DateExp)
    formData.append('Manuel', this.state.Manuel)
    formData.append('EtatPhy', this.state.EtatPhy)
    formData.append('LieuStockage', this.state.LieuStockage)
    formData.append('Quantite', this.state.Quantite)
    formData.append('Statut', this.state.Statut)
    formData.append('NbrTotalArt', this.state.NbrTotalArt)
    formData.append('NbrTotalStock', this.state.NbrTotalStock)
    formData.append('NbrTotalHors', this.state.NbrTotalHors)
    formData.append('Reference', this.state.Reference)
    formData.append('nom_kit', this.state.nom_kit)
    formData.append('code_kit', this.state.code_kit)
    formData.append('contenu_kit', this.state.contenu_kit)
    const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }}
    axios
      .post("/addArticle",formData,config,{  // envoyer les données récupérées a la base de données au chemin /addd
 })
      .then(res => axios.get("/articles"), 
      
      //.then(res => this.props.updateExpertList(res.data))
      )
      .catch(err => alert(err));
 } 

 classSelectfun = e => {
  
  var options = document.getElementById("exampleSelect");
  var id= options[options.selectedIndex].id;
  var cl= options[options.selectedIndex].value;
  this.setState({
    fonction: cl,
  })
};
classSelectstat = e => {
  
  var options = document.getElementById("exampleSelect2");
  var id= options[options.selectedIndex].id;
  var cl= options[options.selectedIndex].value;
  this.setState({
    Statut: cl,
  })
if(this.state.selectedOption!=null){
  Object.keys(this.state.selectedOption).map((obj, i) => {
      
    this.state.contenu_kit.push(this.state.selectedOption[obj].label)})
}
 
  
};

classSelectEtat = e => {
  
    var options = document.getElementById("exampleSelectt");
    var id= options[options.selectedIndex].id;
    var cl= options[options.selectedIndex].value;
    this.setState({
      EtatPhy: cl,
    })
  };
classSelect = e => {
  
    var options = document.getElementById("exampleSelect1");
    var id= options[options.selectedIndex].id;
    var cl2= options[options.selectedIndex].value;
    this.setState({
      type: cl2,
    })
  };
  calcule(){
    const result = this.state.article.filter(word => word.type.includes(this.state.type)).length
    this.setState({
      NbrTotalArt:result
    });
    const resultat = this.state.article.filter(word => word.type.includes(this.state.type))
    const stock = resultat.filter(el=>el.Statut.includes('en stock')).length
    this.setState({
      NbrTotalStock:stock
    });
    const hors= result - stock;
    this.setState({
      NbrTotalHors:hors
    });
    
  }
  genRef=()=>{
   var num = this.state.article.filter((el) => (el.type === this.state.type)).length
   var nume= num+1
    this.setState({
      try:nume
  })
 
  var code = this.state.code_kit
    if(this.state.fonction=="Consommable"){
    var options = document.getElementById("exampleSelect1");
    var id= options[options.selectedIndex].id;
    
   this.setState({
       Reference: "CF"+"-"+id+"-"+nume
   })}
    else if(this.state.fonction=="Equipement"){
    var options = document.getElementById("exampleSelect1");
    var id= options[options.selectedIndex].id;
    var code = this.state.code_kit
   
    this.setState({
        Reference: "EF"+"-"+id+"-"+nume
    })}
    else
    this.setState({
        Reference: "KF"+"-"+code+"-"+nume
       
        
    })
       

  }
  
  componentDidMount=()=>{
    this.getEquipments() 
  }

  handleMultiChange=selectedOption=> {
    this.setState({ selectedOption });
}
  render() {
   
    return (
      <div>
        <button className="homeButton"  onClick={() => {
    this.toggle();this.getarticle();this.test()
            
          }}>Add Article</button>
        <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h2>Article</h2></ModalHeader>
          <ModalBody>
            <div className="ordreMission">

              
               <FormGroup row>

               <Label for="exampleEmail" sm={2}>Fonction</Label>
               <Col sm={10}>
               <Input type="select" name="select" id="exampleSelect" onChange={()=>{this.classSelectfun();this.change()}}>{"  "}
                       <option hidden selected>Choisir une Fonction </option>
                       {this.state.fun.map((x,y) => 
                       <option   value={x.name}>{x.name}</option>)}
               </Input>
               </Col>
               </FormGroup>


               {(() => {
          switch (this.state.fonction) {
            case "Consommable":
              return (    
                 <div> <FormGroup row>
                <Label for="exampleEmail" sm={2}>Type</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect1"   onChange={()=>{this.classSelect()}}>{"  "}
                        <option hidden selected>Choisir un Type </option>
                        {this.state.Equ.map((x,y) => 
                        <option  id={x.equipmentCode} value={x.equipmentName}>{x.equipmentName}</option>)}
                </Input>
                </Col>
                </FormGroup>
 
                           
                <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Constructeur</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="constructeur"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Numéro de Serie</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="NumSerie"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Etalonnage</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateEtalonnage"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Expiration</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateExp"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
                 <FormGroup row>
                        <Label for="exampleSelect" sm={2}>EtatPhy</Label>
                         <Col sm={10}>
                 <Input type="select" name="select" id="exampleSelectt"   onChange={()=>{this.classSelectEtat();this.genRef()}}>{"  "}
                 <option hidden selected>Choisir un etat </option>
                        
                         <option>pas encore consommé</option>
                         <option>consommé</option>
                         )}
                 </Input>
                 </Col>
                 </FormGroup>
             
 
 <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Lieu de Stockage</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="LieuStockage"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Quantite</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Quantite"type="number"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Statut</Label>
         <Col sm={10}>
         <Input type="select" name="select2" id="exampleSelect2" onChange={()=>{this.classSelectstat();this.calcule()}}>{"  "}
                       <option hidden selected>Choisir une Statut </option>
                       <option value="en stock">en stock</option>
                       <option value="hors stock">hors stock</option>
                       
               </Input>
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Manuel</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Manuel"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup>
                 
         <Label for="exampleEmail" sm={2}>Photo</Label>
                 <input type="file" name="productImage"   onChange={this.onFileChange} />
                 
                 </FormGroup>
                 <FormGroup row> 
       <Label for="exampleEmail" sm={2}>Reference</Label>
         <Col sm={10}>
         <Label for="exampleEmail" sm={3}>{this.state.Reference}</Label>
         </Col>
       </FormGroup>  
                </div>)
            case "Equipement":
              return (<div> <FormGroup row>
                <Label for="exampleEmail" sm={2}>Type</Label>
                <Col sm={10}>
                <Input type="select" name="select" id="exampleSelect1"   onChange={()=>{this.classSelect()}}>{"  "}
                        <option hidden selected>Choisir un Type </option>
                        {this.state.Equ.map((x,y) => 
                        <option  id={x.equipmentCode} value={x.equipmentName}>{x.equipmentName}</option>)}
                </Input>
                </Col>
                </FormGroup>
 
                
       
                
                <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Constructeur</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="constructeur"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Numéro de Serie</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="NumSerie"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Etalonnage</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateEtalonnage"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Expiration</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateExp"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
                  
                    <FormGroup row>
                           <Label for="exampleSelect" sm={2}>EtatPhy</Label>
                           <Col sm={10}>
                    <Input type="select" name="select" id="exampleSelectt"   onChange={()=>{this.classSelectEtat();this.genRef()}}>{"  "}
                    <option hidden selected>Choisir un etat </option>
                            <option> bon état</option>
                            <option>en panne</option>
                            
                            )}
                    </Input>
                    </Col>
                    </FormGroup>
               
 
 <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Lieu de Stockage</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="LieuStockage"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Quantite</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Quantite"type="number"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Statut</Label>
         <Col sm={10}>
         <Input type="select" name="select2" id="exampleSelect2" onChange={()=>{this.classSelectstat();this.calcule()}}>{"  "}
                       <option hidden selected>Choisir une Statut </option>
                       <option value="en stock">en stock</option>
                       <option value="hors stock">hors stock</option>
                       
               </Input>
         </Col>
       </FormGroup>
 
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Manuel</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Manuel"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
 
       <FormGroup>
                 
         <Label for="exampleEmail" sm={2}>Photo</Label>
                 <input type="file" name="productImage"   onChange={this.onFileChange} />
                 
                 </FormGroup>
                 <FormGroup row> 
       <Label for="exampleEmail" sm={2}>Reference</Label>
         <Col sm={10}>
         <Label for="exampleEmail" sm={3}>{this.state.Reference}</Label>
         </Col>
       </FormGroup>
                </div>);
            case "Kit":
            
              return (<div> 
   {/* type */}
 <FormGroup row>
                
                <Label for="exampleEmail" sm={2}>Type</Label>
                <Col sm={10}>
               <Select 
                value={this.state.selectedOption}
               onChange={this.handleMultiChange.bind(this)}
                options={this.state.filterOptions}
                isMulti

             />         
                </Col>
                </FormGroup>      
 {/* nom kit */}
<FormGroup row> 
                <Label for="exampleEmail" sm={2}>nom Kit</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="nom_kit"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
       {/* code kit */}
 <FormGroup row> 
                <Label for="exampleEmail" sm={2}>code Kit</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="code_kit"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 {/* date etalonnage */}
  <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Etalonnage</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateEtalonnage"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 {/* date exp */}
 <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date d'Expiration</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="DateExp"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>
{/* Lieu stockage */}
 <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Lieu de Stockage</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="LieuStockage"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 {/* quantite */}
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Quantite</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Quantite"type="number"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 {/* statut */}
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Statut</Label>
         <Col sm={10}>
         <Input type="select" name="select2" id="exampleSelect2" onChange={()=>{this.classSelectstat();this.calcule();this.genRef()}}>{"  "}
                       <option hidden selected>Choisir une Statut </option>
                       <option value="en stock">en stock</option>
                       <option value="hors stock">hors stock</option>
                       
               </Input>
         </Col>
       </FormGroup>
 {/* Manuel */}
       <FormGroup row> 
                <Label for="exampleEmail" sm={2}>Manuel</Label>
         <Col sm={10}>
           <Input className="inputItems"  name="Manuel"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>
 
 {/* photo */}
   <FormGroup>
                 
         <Label for="exampleEmail" sm={2}>Photo</Label>
                 <input type="file" name="productImage"   onChange={this.onFileChange} />
                 
                 </FormGroup>
{/* reference */}

                 <FormGroup row> 
                 <Label for="exampleEmail" sm={2}>Reference</Label>
                   <Col sm={10}>
                   <Label for="exampleEmail" sm={3}>{this.state.Reference}</Label>
                   </Col>
                 </FormGroup>
                </div>);
           
            default:
              return null;
          }
        })()}


               
         
              
               
               </div>
               
               

            
         
            
         
            
          </ModalBody>
          <ModalFooter>
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick={()=>{this.AddArticle();this.calcule();this.genRef()}}
          >
        { !this.state.isLoading &&  <span> Ajouter un Article</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Ajouter un expert</span>}
    
    </Button>
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Article;