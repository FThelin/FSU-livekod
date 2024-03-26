const loggedIn = (req, res, next) => {
    if (!req.session.user) {
        return res.status(401).json("You are not logged in")
    }
    next()
}

module.exports = { loggedIn }