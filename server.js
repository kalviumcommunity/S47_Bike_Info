const express = require('express')
const app = express()

app.get('/ping',(req,res)=>{
    res.json({message:'Pong'})
})

app.listen(3000,()=>{
    console.log('Server is working on 3000')
})