require("colors");
const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.socket.remoteAddress)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify([{ "name": "Fredrik" }]))
})

server.listen(3001, () => console.log("Server is up....."))

