const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const config = require("config");
const router = express.Router();
const User = require("../models/User");

const {MongoClient, ObjectID} = require('mongodb')


router.get("/users", (req, res) => {
  User.find().then(user => res.send(user))
});

router.get('/users/:id', (req, res) => {
  let userId = ObjectID(req.params.id)
  db.collection('users').findOne({_id : userId}, (err, data)=>{
      if (err) res.send('user not found')
      else (res.send(data))
  })
})



router.post("/register", (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  const permission = req.body.permission;
  
  User.findOne({username}).then(user => {
    if (user) {
      return res.json({
        msg: "user already exist"
      });}
    const newUser = new User({
     username: username,
      password: password,
      permission:permission
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        newUser.password = hash;
        newUser
          .save()
          .then(saved =>jwt.sign({
                id: saved._id
              },
              config.get("secretKEY"), {
                expiresIn: 3600
              },
              (err, token) => {if (err) throw err;
                 res.status(200).send({ auth: true, token: token });
              }
            )
          )
          
          // res.json(saved))
          .catch(err => console.log(err));
      });
    });
  });
});



//route: http://localhost:5000/login
//desc: login user
//isPrivate: false
router.post("/login",(req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const permission = req.body.permission;
  User.findOne({username}).
  then(user => {
    if (!user) {
      return res.status(400).json({
        msg: "user not found"
      });
    }
    bcrypt.compare(password, user.password).then(isMatched => {
      if (isMatched) {
        const payload = {
          id: user.id,
          username: user.username
        };
        jwt.sign(
          payload,
          config.get("secretKEY"), {
            expiresIn: 3600
          }, 
          (err, token) => {
            if (err) throw err;
            res.json({
              token: "Bearer " + token,
              user
            });
          }
        );
      } else {
        return res.status(400).json({
          msg: "password incorrect"
        });
      }
    });
  });
});


router.put('/UserEdit/:id', (req, res) => {
  let userId = ObjectID(req.params.id)
  let updateduser = req.body

  Articles.updateOne({_id : userId},{$set : { ...updateduser}}, (err, data)=>{
      if (err) console.log(err)
      else (res.send(data))
  })
  
})

router.delete('/DelUser/:id', (req, res) => {
  let userId = ObjectID(req.params.id)
  let updateduser = req.body
  User.findOneAndDelete({_id : userId},{$set : { ...updateduser}}, (err, data)=>{
      if (err) console.log(err)
      else (res.send(data))
  })
})




router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.user);
  }
);




// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;