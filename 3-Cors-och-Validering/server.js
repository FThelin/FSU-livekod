const express = require("express")
const cors = require("cors")
const { registerSchema } = require("./schemas/user.schema")
const { validate } = require("./validate")

const app = express()

app.use(cors())
app.use(express.json())

const users = []

app.post("/api/users/register", validate(registerSchema), (req, res) => {
    users.push(req.body)
    res.status(201).json(users)
})

app.listen(3000, () => console.log("Server is up..."))