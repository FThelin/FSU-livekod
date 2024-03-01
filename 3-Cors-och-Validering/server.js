const express = require("express")
const cors = require("cors")
const { registerSchema } = require("./schemas/user.schema")
const { validate } = require("./validate")

const app = express()

app.use(cors())
app.use(express.json())

const users = []

app.post("/api/users/register", validate(registerSchema), (req, res) => {

    //**** Kommentera in denna kod om ni inte vill använda egenskriven middleware "validate" ovan ****/
    // const { error } = registerSchema.validate(req.body, { abortEarly: false })

    // if (error) {
    //     return res.status(400).json(error)
    // }

    users.push(req.body)
    res.status(201).json(users)
})

app.listen(3000, () => console.log("Server is up..."))