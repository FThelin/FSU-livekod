const express = require("express")
const app = express()

const productRouter = require("./routers/product.router")

//Middlewares
app.use(express.json())

//Routers
app.use("/products", productRouter)



//Connect to DB


app.listen(3000, () => console.log("Server is up and running..."))