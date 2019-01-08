const express = require('express');
const app  =  express();
const port  = process.env.PORT || 3000;

app.get('/',(req,res) =>{
    res.status(200).send({
        error:"404",
        page:"page not found"
    });
})

app.get('/user',(req,res) =>{
    res.send([{
        name:"Vishesh",
        age:27
    },{
        name:"Ankur",
        age:27
    },{
        name:"Diwakar",
        age:27
    }])
})
app.listen(port,() =>{
    console.log(`app is running on ${port}`);
})

module.exports.app = app;