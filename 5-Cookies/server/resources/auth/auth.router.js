const express = require("express")
const { register, login, logout, authorize } = require("./auth.controllers")
const router = express.Router()

router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)
router.get("/authorize", authorize)

module.exports = router