import React, { Component } from 'react'
import { Page, Text, View, Document, StyleSheet, Image, } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import axios from 'axios';


export default class PrintOrdre extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            numOrdre: "",// nom d'expert
            NomPrenom:"",
            Qualification:"",       
            dateDebut:"",
            dateFin:"",
            dureeVisite:"",
            qualificationExigees:"",
            lieuMission:"",
            client:"",
            etendue:"",
            materiels:"",
            lieu:"",
            mobilisation:"",
            logement:"",
            demobilisation:"",
          }     
        
    }
    // get data from data base 
    componentDidMount () {
        axios.get("/missionsList/" + this.props.id ).then(res => this.setState({
          ...res.data  // obtenir toutes variables de la base de donnés et les envoyer au constructor 
        }
          ))}
    
    render() {
        return (
            <div  style={styles.container}>
                 <PDFViewer width="100%" height="900px">
                 <Document>
                        <Page size="A4" style={styles.page} >
                            <View style={styles.body}>
                                <Image
                                    style={styles.image}
                                    src={require('../../Media/logo-falcon.png')}
                                />
<View>
<Text style={styles.title}>Ordre de Mission</Text>
                                </View>

<View style={styles.tableRow}> 
          <View style={styles.tableColl}> 
            <Text style={styles.tableCellHeader}>Numéro d'ordre</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{this.state.numOrdre}</Text> 
          </View> 
         
</View>

<View style={styles.tableColll}> 
            <Text style={styles.tableCellHeader}>Inspecteur</Text> 
             
          </View> 
          
<View style={styles.tableRow}> 
          <View style={styles.tableColl}> 
            <Text style={styles.tableCell}>Nom et Prénom Inspecteur</Text> 
          </View> 
          <View style={styles.tableCol}> 
        <Text style={styles.tableCell}>{this.state.NomPrenom}</Text> 
        </View>
        </View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Qualification</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.Qualification}</Text> 
        </View>
</View>    

        <View style={styles.tableColll}> 
            <Text style={styles.tableCellHeader}>Détails de la misssion</Text>      
      
</View> 
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>date de debut</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.dateDebut}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>date de fin</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.dateFin}</Text> 
        </View> 
</View>  
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Durée de la visite</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.dureeVisite}</Text> 
        </View> 
</View>                       
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>qualification éxigées</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.qualificationExigees}</Text> 
        </View> 
</View>  

<View style={styles.tableColll}> 
            <Text style={styles.tableCellHeader}>Détails du projet</Text> 
             
        
          </View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Lieu de mission</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.lieuMission}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Cient</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.client}</Text> 
        </View> 
</View>
 
<View style={styles.tableColll}> 
            <Text style={styles.tableCellHeader}>Etendue d'inspection</Text> 
             
           
          </View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Etendue</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.etendue}</Text> 
        </View> 
</View>
<View style={styles.tableColll}> 
            <Text style={styles.tableCellHeader}>Logistiques</Text> 
          </View> 
          <View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Equipements recommandée</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.materiels}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Lieu</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.lieu}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Mobilisation</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.mobilisation}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Logement</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.logement}</Text> 
        </View> 
</View>
<View style={styles.tableRow}> 
        <View style={styles.tableColl}> 
           <Text style={styles.tableCell}>Démobilisation</Text> 
        </View> 
        <View style={styles.tableCol}> 
           <Text style={styles.tableCell}>{this.state.demobilisation}</Text> 
        </View> 
</View>                   
                            </View> 
                            <Text style={styles.textFooter}>Generated by Falcon</Text>              
    </Page>
                </Document>
                </PDFViewer>
                
            </div>
        )
    }
}
const styles = StyleSheet.create({
    Page:{
        display:"flex",
        alignItems:"center"
    },
    
    body:{
      margin:30,
    },
    
    title: { 
        marginBottom:10,
        textAlign:'center',
        fontSize:25,
        fontWeight:'extrabold',
        color: '#000',
          
      },
      textFooter:{
        textAlign:'right',
        fontSize:8,
        marginTop:5,
    },
    table: { 
    
      display: "table", 
      width: "auto", 
      borderStyle: "solid", 
      borderColor: '#bfbfbf',
      borderWidth: 1, 
      borderRightWidth: 1, 
      borderBottomWidth: 1 ,
        
      
      
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" ,
      width:"200%",
    
    }, 
       
    tableColll: { 
      width: "100%", 
      borderStyle: "solid", 
      borderColor: 'black',
      borderWidth: 1, 
      borderLeftWidth: 1, 
      borderTopWidth: 1 ,
      backgroundColor:"#fff200" ,
      textAlign:'center',
      alignSelf:'stretch'
      

      
    }, 
    tableColl: { 
        width: "25%", 
        borderStyle: "solid", 
        borderColor: 'black',
        borderWidth: 1, 
        borderLeftWidth: 1, 
        borderTopWidth: 1 ,
        backgroundColor:"#3867d6" 
        
      }, 
      tableCol: { 
        width: "25%", 
        borderStyle: "solid", 
        borderColor: 'black',
        borderWidth: 1, 
        borderLeftWidth: 1, 
        borderTopWidth: 1 ,
         
        
      }, 
    tableCellHeader: {
      margin: "auto", 
      margin: 5, 
      fontSize: 12,
      fontWeight: 500,
      
      
    },  
    tableCell: { 
      margin: "auto", 
      margin: 5, 
      fontSize: 10 ,
      
    },

    
    image: {
        alignSelf:"center",
        marginVertical: 25,
        marginHorizontal: 10,
        width:150,
        height:55,
    },
  });