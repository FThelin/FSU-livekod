const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("sk_test_51OjIiEKDYG89Sk1MKg6q9bso0EUiqlqry5gqm4k1Au9jtId5XHEOhQWPNNktf25Abe15oAhuBf0UwOi4QEueTo5w00aPxhRzuF")

const app = express()

app.use(cors())

app.get("/products", async (req, res) => {
    const products = await stripe.products.list({
        expand: ["data.default_price"]
    });
    res.status(200).json(products)
})

app.listen(3000, () => console.log("Server is up...."))