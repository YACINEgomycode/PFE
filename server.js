const {MongoClient, ObjectID} = require('mongodb')
const bodyParser = require('body-parser')
const assert = require('assert')
const path = require('path');
const express = require("express");
const passport = require("passport");
const app = express();
const cors = require("cors");
const User = require("./models/User")
const Client = require("./models/Client")
const Certif = require("./models/Certif")
const Expertise = require("./models/Expertise")
const Equipment = require("./models/Equipment")
const Transaction = require("./models/Transaction")


var xss = require('xss-clean')
 
// this comes before any routes 
app.use(xss())
// This will sanitize any data in req.body, req.query, and req.params
var clean = require('xss-clean/lib/xss').clean 
var cleaned = clean('<script></script>')
// will return "&lt;script>&lt;/script>"


//Body parser middleware

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

// Connection a la base de données
const mongo_url = 'mongodb://localhost:27017'
const dataBase = "FalconData"
 MongoClient.connect(mongo_url,{ useUnifiedTopology: true }, (err, client)=>{
    assert.equal(err, null, 'dataBase connexion failed')

     const db = client.db(dataBase);

     


    //  CRUD des Experts
    app.post('/add', (req, res) =>{
        let newExpert = req.body;
        db.collection('experts').insertOne(newExpert, (err, data)=>{
            if (err) res.send('Vous ne pouvez pas ajouter un nouveau expert')
            else (res.send('Vous avez ajouter un nouveau expert'))
        })
    })
    app.get('/expertsList', (req, res) =>{
        db.collection('experts').find().toArray((err, data)=>{
            if (err) res.send('can not add new expert')
            else (res.send(data))
        })
    })
    app.get('/expertsList/:id', (req, res) => {
        let expertId = ObjectID(req.params.id)
        db.collection('experts').findOne({_id : expertId}, (err, data)=>{
            if (err) res.send('can not add new expert')
            else (res.send(data))
        })
    })
    app.put('/expertsList/:id', (req, res) => {
        let expertId = ObjectID(req.params.id)
        let updatedExpert = req.body
        db.collection('experts').updateOne({_id : expertId},{$set : { ...updatedExpert}}, (err, data)=>{
            if (err) console.log(err)
            else (res.send(data))
        })
    })
    app.delete('/expertsList/:id', (req, res) => {
        let expertId = ObjectID(req.params.id)
        let updatedExpert = req.body
        db.collection('experts').findOneAndDelete({_id : expertId},{$set : { ...updatedExpert}}, (err, data)=>{
            if (err) console.log(err)
            else (res.send(data))
        })
    })
    


    // CRUD des missions
    app.post('/addd', (req, res) =>{
        let newMission = req.body;
        db.collection('missions').insertOne(newMission, (err, data)=>{
            if (err) res.send('Vous ne pouvez pas ajouter une nouvelle mission')
            else (res.send('Vous avez ajouter une nouvelle mission'))
        })
    })
   
    app.get('/missionsList', (req, res) =>{
        
        db.collection('missions').find().toArray((err, data)=>{
            if (err) res.send('can not get missions')
            else (res.send(data))
        })
    })

    app.get('/missionsList/:id', (req, res) => {
        let missionId = ObjectID(req.params.id)
        db.collection('missions').findOne({_id : missionId}, (err, data)=>{
            if (err) res.send('can not get this mission')
            else (res.send(data))
        })
    })

    app.put('/missionsList/:id', (req, res) => {
        let missionId = ObjectID(req.params.id)
        let updatedmission = req.body

        db.collection('missions').updateOne({_id : missionId},{$set : { ...updatedmission}}, (err, data)=>{
            if (err) console.log(err)
            else (res.send(data))
        })
        
    })
    app.delete('/missionsList/:id', (req, res) => {
        let missionId = ObjectID(req.params.id)
        let updatedmission = req.body
        db.collection('missions').findOneAndDelete({_id : missionId},{$set : { ...updatedmission}}, (err, data)=>{
            if (err) console.log(err)
            else (res.send(data))
        })
    })



    

})


// Body & Header Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: '2000kb' }));
app.use(cors());


// passport Midleware
app.use(passport.initialize());
//passport Config
require("./Middleware/passport")(passport);
// Connexion BD
require("./config/db")();
// API Route
app.use(require("./routes/users"));
app.use(require("./routes/clients"));
app.use(require("./routes/certif"));
app.use(require("./routes/expertise"));
app.use(require("./routes/equipments"));
app.use(require("./routes/article"));
app.use(require("./routes/transaction"));




// Preventing DOS Attacks
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs:  60 * 60 * 1000, // 1 hour window
  max:2000, // start blocking after 2000 requests
  message: 'DOS attack detected !! ' 
}); 
//  apply to all requests

app.use(limiter);





// server static assets in production
if (process.env.NODE_ENV === "production") {
  // set static folde
  app.use(express.static("/build"));
  app.get("/", (req, res) => {
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "build", "index.html"));
    });
  });
}
app.use(express.static(path.join(__dirname, "build")));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`))
;
