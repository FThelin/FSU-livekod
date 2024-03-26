const fetchUsers = require("../../utils/fetchUsers")

const getUsers = async (req, res) => {

    const users = await fetchUsers()

    if (!users || users.length <= 0) {
        return res.status(400).json("No users found")
    }

    res.status(200).json(users)
}

module.exports = { getUsers }