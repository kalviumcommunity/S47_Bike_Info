const mongoose = require('mongoose')

const BikeData = new mongoose.Schema({
    company : String,
    model : String,
    price : Number
})

module.exports = mongoose.model('Bike',BikeData)