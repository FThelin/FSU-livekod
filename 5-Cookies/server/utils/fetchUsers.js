const fs = require("fs").promises

const fetchUsers = async () => {
    const data = await fs.readFile("./data/users.json")
    const users = JSON.parse(data)
    return users
}

module.exports = fetchUsers

