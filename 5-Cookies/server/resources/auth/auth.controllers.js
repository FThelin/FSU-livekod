const fs = require("fs").promises
const bcrypt = require("bcrypt")
const fetchUsers = require("../../utils/fetchUsers")

const register = async (req, res) => {

    const { email, password } = req.body

    //Kolla så att användaren inte redan finns
    const users = await fetchUsers()
    const userAlreadyExists = users.find(u => u.email === email)

    if (userAlreadyExists) {
        return res.status(400).json("User already exists")
    }

    //Kryptera lösenordet
    const hashedPassword = await bcrypt.hash(password, 10)

    //Sparar till databasen
    const newUser = {
        email,
        password: hashedPassword
    }
    users.push(newUser)
    await fs.writeFile("./data/users.json", JSON.stringify(users, null, 2))

    //Skicka tillbaka ett svar
    res.status(201).json(newUser.email)
}

const login = async (req, res) => {


    const { email, password } = req.body

    const users = await fetchUsers()
    const userExists = users.find(u => u.email === email)

    //Kolla så att lösenordet stämmer och att användaren finns
    if (!userExists || !await bcrypt.compare(password, userExists.password)) {
        return res.status(400).json("Wrong user or password")
    }

    //Skapa en session
    req.session.user = userExists
    //Skicka tillbaka ett svar
    res.status(200).json(userExists.email)
}

const logout = (req, res) => {
    req.session = null
    res.status(200).json("Successfully logged out")
}

const authorize = (req, res) => {
    if (!req.session.user) {
        return res.status(401).json("You are not logged in")
    }
    res.status(200).json(req.session.user.email)
}

module.exports = { register, login, logout, authorize }