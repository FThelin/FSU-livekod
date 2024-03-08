const express = require("express")
const { getAllProducts } = require("../controllers/product.controller")
const router = express.Router()

router.get("/", getAllProducts)

module.exports = router

