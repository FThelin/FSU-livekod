const getAllProducts = (req, res) => {
    res.status(201).json("There you go! All products")
}

module.exports = { getAllProducts }