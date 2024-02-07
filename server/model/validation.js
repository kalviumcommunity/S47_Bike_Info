const Joi = require('joi')

const Validator = (schema)=>(payload)=>
    schema.validate(payload)

const Schema = Joi.object({
    company : Joi.string().required(),
    model : Joi.string().required(),
    price : Joi.string().required(),
    mileage : Joi.string().required(),
    img: Joi.string().url().required()
})

exports.ValidData = Validator(Schema)