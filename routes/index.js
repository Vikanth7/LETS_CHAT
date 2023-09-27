var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ()=> {
  res.render('index');
});

router.get('/views/register',()=> {
  res.render('register');
})

module.exports = router;
