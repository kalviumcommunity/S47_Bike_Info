const express = require('express')
const route = require('./route')
const {ValidData} = require('./model/validation')
const app = express()
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const DataModel = require('./model/model')
const cors = require('cors')
require('dotenv').config()
app.use(cors())
app.use('/',route)
app.use(express.json())

const URI = process.env.Mongo_URI

mongoose.connect(URI)

app.get('/DataBase',(req,res)=>{
    DataModel.find({})
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.post('/InsertData',(req,res)=>{
    const {company,model,price,mileage,img} = req.body
    const {error} = ValidData(req.body)
    if(error) return res.json({message:error.message})

    DataModel.create(req.body)
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})


app.get('/GetData/:id',(req,res)=>{
    const {id} = req.params
    DataModel.findById(id)
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.put('/UpdateData/:id',(req,res)=>{
    const {id} = req.params
    const {company,model,price,mileage,img} = req.body
    DataModel.findByIdAndUpdate(id,{
        company,
        model,
        price,
        mileage,
        img
    },{new:true})
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.delete('/DeleteData/:id',(req,res)=>{
    const {id} = req.params
    DataModel.findByIdAndDelete({_id:id})
    .then(data=>res.json(data))
    .catch((err)=>res.json(err))
})

app.get('/ping',(req,res)=>{
    res.json({message:'Pong'})
}) 

app.post('/login',(req,res)=>{
    const secret = "Dhruv"
    const token = jwt.sign({data:req.body},secret)
    // console.log(token)
    res.send(token)
})
app.listen(4000,()=>{
    console.log('Server is working on 4000')
})