const express = require('express')
const route = require('./route')
const app = express()
const mongoose = require('mongoose')
const URI = 'mongodb+srv://dhruvk:q6GkQB4Kg3jvSHFd@dhruv-bike-info.dga5pzc.mongodb.net/?retryWrites=true&w=majority'

app.use('/',route)

app.get('/DB',(req,res)=>{
    mongoose.connect(URI)
    .then(()=>{
        res.json({Connection_Status:'Connected'})
    }).catch((err)=>{
        res.json({Connection_Status:"Not Connected"})
    })
})




app.get('/ping',(req,res)=>{
    res.json({message:'Pong'})
})

app.listen(4000,()=>{
    console.log('Server is working on 4000')
})