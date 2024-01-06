const express = require('express')
const app = express()

var ert =[
    {id:1,name:'jhon',age: 25, place: 'lorden'},
    {id:2,name:'doe',age: 25, place: 'lorden'},
    {id:3,name:'david',age: 25, place: 'lorden'}
]
app.get('/',(req,res)=>{
    console.log("abcd");
    res.json(ert)
})

app.get('/profile',(req,res) => {
    res.json(ert)
})
app.get('/profile/:id',(req,res) => {
    const userid = parseInt(req.params.id)

    const detail = ert.filter((data) => data.id === userid)
    console.log(detail);
    res.json(detail)
})
app.listen(8080)