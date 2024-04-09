const express = require("express")
const fs = require("fs").promises
const ServerError = require("./ServerError")

const app = express()

app.get("/error", (req, res, next) => {
    try {
        const users = users.find(u => u.id === 3)
    } catch (err) {
        throw new ServerError(418, "I am a Teapot and I don´t know what I am doing")
    }

})

app.get("/success", (req, res) => {
    res.status(200).json("SUCCESS")
})


app.use((err, req, res, next) => {
    console.log(err)

    // const response = {
    //     message: err.message || "Something went wrong"
    // }

    if (!err.statusCode) {
        err.statusCode = 500
    }

    if (err instanceof ServerError) {
        return res.status(err.statusCode).json(err.message)
    }

    // if (err.code === "ENOENT") {
    //     err.statusCode = 404
    //     response.message = "Could not find what you´re looking for"
    // } else if (err.name === "ReferenceError") {
    //     err.statusCode = 400
    //     response.message = "I wrote some JS code wrong"
    // }


    res.status(err.statusCode).json(err.message)
})

app.listen(3001, () => console.log("Server is up..."))