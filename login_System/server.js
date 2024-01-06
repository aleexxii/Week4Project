
const express = require('express')
const path = require('path')
const session = require('express-session')
const bodyParser = require('body-parser')
const { v4:uuidv4 } = require("uuid")
const noCatch = require('nocache')

const routerV = require('./router');
const { log } = require('console')


const app = express()
const port = process.env.PORT || 9000;

//app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
//load static assets
app.use('/static',express.static(path.join(__dirname,'/public')))
// app.use(express.static(path.join(__dirname, '/public/assets' )));
app.use(noCatch())
app.use(session({
    secret:uuidv4(),
    resave:false,
    saveUninitialized:false,
}));
app.use('/route',routerV);
//home route
app.get('/',(req,res) => {
    if(req.session.user){
        res.redirect('/route/dashboard')
    }else{
        res.render('base',{title:"Login System"})
    }   
})
app.listen(port,()=>{console.log("listning to the server on http://localhost:9000")})