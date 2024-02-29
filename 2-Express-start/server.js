const express = require("express")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000

const users = [
    {
        id: 1,
        email: "freddy@mail.se",
        password: "12345"
    },
    {
        id: 2,
        email: "maggan@mail.se",
        password: "23456"
    },
    {
        id: 1,
        email: "berra@mail.se",
        password: "54321"
    }
]

// app.use(express.static("public"))

app.use(express.json())

// app.use((req, res, next) => {
//     console.log("Hejsan")
//     next()
// })

app.get("/users", (req, res) => {
    res.status(200).json(users)
})

app.get("/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id)
    res.status(200).json(user)
})

app.post("/users", (req, res) => {
    users.push(req.body)
    res.status(201).json(req.body)
})



app.listen(3000, () => console.log("Server is up and running"))