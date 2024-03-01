const Joi = require("joi")

const registerSchema = Joi.object({
    username: Joi.string().min(6).max(16).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(16).required(),
    confirmPassword: Joi.ref("password"),
    address: Joi.object({
        street: Joi.string().required()
    }).required(),
    hobbies: Joi.array().items(Joi.string()).min(3).required(),
    dateOfBirth: Joi.date().greater(new Date("2000-01-01"))
})

module.exports = { registerSchema }