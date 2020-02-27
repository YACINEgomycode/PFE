var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('config');

router.post("/register", (req, res) => {
  
    const password = req.body.password;
    const username = req.body.username;
    const permission = req.body.permission;
    
  
  
  
  
  
    User.findOne({
      username
    }).then(user => {
      if (user) {
        return res.json({
          msg: "user already exist"
        });
      }
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
            .then(saved =>
              jwt.sign({
                  id: saved._id
                },
                config.secretKEY, {
                  expiresIn: 3600
                },
                (err, token) => {
                  if (err) throw err;
                  res.status(200).send({ auth: true, token: token });;
                }
              )
            )
            // res.json(saved))
            .catch(err => console.log(err));
        });
      });
    });
  });
 
  router.post('/me', function(req, res) {
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['Authorization'];
    if (!token) return res.status(401).send(req.headers);
    
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      
      res.status(200).send(decoded);
    });
  });



  

  module.exports = router;