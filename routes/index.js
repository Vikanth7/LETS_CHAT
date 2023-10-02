
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
  res.render('Home1');
});

router.get('/register',(req,res)=>{
  res.render('register');
});

router.get('/Home2',(req,res)=>{
  res.render('Home2');
});

router.get('/Home1',(req,res)=>{
  res.render('Home1');
})
router.post('/register',(req,res)=>{
  const details = req.body
  console.log(details)
  res.redirect('/register')
})



module.exports = router;
