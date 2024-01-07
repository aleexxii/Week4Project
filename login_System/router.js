const express = require('express');
const router = express.Router();

const userDetails = {
    email:"abcd@gmail.com",
    pass:"abcd"
}

// login user
router.post('/login',(req,res) => {
    if(req.body.email==userDetails.email && req.body.password == userDetails.pass){
        req.session.user = req.body.email;
        res.redirect("/route/dashboard")
        // res.end("Logged")
    }else if (req.body.email == "" || req.body.email != userDetails.email ) {
        res.render('base',{invalid:"Invalid email"})
    }
    else if (req.body.password == "" || req.body.password != userDetails.pass ) {
        res.render('base',{invalid:"invalid password"})
    }
})

// route for dashboard
router.get('/dashboard',(req,res) => {
    if(req.session.user){
        res.render('dashboard')
    }else {
        res.send("unathouraized user")
    }
})

//  route for log out
router.get('/logout',(req,res) => {
    req.session.destroy(function(err){
        if(err){
            res.send("Error")
        }else {
            res.render('base')
        }
    })
})
module.exports = router;