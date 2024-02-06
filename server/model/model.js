const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    id: Number,
    company : String,
    model : String,
    price : String,
    mileage : String,
    img: String
})

const DataModel = mongoose.model('bikes',DataSchema)

module.exports = DataModel