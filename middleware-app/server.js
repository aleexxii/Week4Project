const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 2000



app.use(function(req,res,next) {
    var filepath = path.join(__dirname,'static', req.url)
    fs.stat(filepath,function(err,fileinfo){
        if(err){
            next()
            return
        }
        if(fileinfo.isFile()){
            res.sendFile(filepath)
        }else {
            next()
        }
    })
})

app.use(function(req,res,next){
    console.log("Request to date : " + new Date());
    res.send("successfull")
    next()
})

app.use((req,res)=>{
    res.status(404)
    res.send("Invalid input")
})

app.listen(port,() => {console.log('to open the server http://localhost:2000')})