const express = require('express')
const app = express()
const mongoose = require('mongoose')
const URI = 'mongodb+srv://dhruvk:q6GkQB4Kg3jvSHFd@dhruv-bike-info.dga5pzc.mongodb.net/?retryWrites=true&w=majority'

app.get('/',(req,res)=>{
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

app.listen(3000,()=>{
    console.log('Server is working on 3000')
})