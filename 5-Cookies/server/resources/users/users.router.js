const express = require("express")
const { getUsers } = require("./users.controllers")
const { loggedIn } = require("../../middlewares/loggedIn")
const router = express.Router()

router.get("/", loggedIn, getUsers)

module.exports = router