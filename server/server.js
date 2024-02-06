const express = require('express')
const route = require('./route')
const app = express()
const mongoose = require('mongoose')
const DataModel = require('./model/model')
const cors = require('cors')

app.use(cors())
app.use('/',route)
app.use(express.json())

const URI = 'mongodb+srv://dhruvk:q6GkQB4Kg3jvSHFd@dhruv-bike-info.dga5pzc.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI)

app.get('/DataBase',(req,res)=>{
    DataModel.find()
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.post('/InsertData',(req,res)=>{
    DataModel.create(req.body)
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.get('/ping',(req,res)=>{
    res.json({message:'Pong'})
})

app.listen(4000,()=>{
    console.log('Server is working on 4000')
})