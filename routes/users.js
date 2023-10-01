const {userModel} = require('../models/schema');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',(req,res)=>{
  const {email,password}= req.body
  try {
    const user = new userModel.findOne({'email' : email})
    if (user){
      res.redirect('/')
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
