const express = require('express');
const router = express.Router(); // create a router object

router.get('/', function(req,res){
    res.render('landing/index')
})

router.get('/about-us', function(req,res){
    res.render('landing/about-us')
})

router.get('/contact-us', function(req,res){
    res.render("landing/contact-us");
})

// export out the router object so that other JS
// files can use
module.exports = router;