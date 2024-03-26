const express = require("express")
const cookieSession = require("cookie-session")
const cors = require("cors")

const userRouter = require("./resources/users/users.router")
const authRouter = require("./resources/auth/auth.router")

const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
app.use(cookieSession({
    secret: "s3cr3tk3y",
    maxAge: 1000 * 60 * 60,
}))

//Routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);


app.listen(3001, () => console.log("Server is up and running...🌭"))