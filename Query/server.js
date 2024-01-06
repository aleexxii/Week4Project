const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send(req.query.name + " " + req.query.age)
})

app.get("/log/:id/:id2",(req,res) =>{
    res.send(req.params.id + " " + req.params.id2)
})
app.listen(2000)