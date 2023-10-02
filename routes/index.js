var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req,res,next){
  res.render('Home1');
});

function register() {
  
  // Define a route to handle the button click and perform the redirect
  router.get('/', (req, res) => {
    // Use a 302 Found status code to indicate a temporary redirect
    res.redirect('/register');
  });
}


module.exports = router;
