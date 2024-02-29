const fs = require("fs").promises

const customers = [
    {
        id: 1,
        name: "Fredrik",
        password: "12345"
    }
]

const readCustomer = async () => {
    const data = await fs.readFile("./customer.json", "utf-8")
    console.log(JSON.parse(data))
}

const saveCustomer = async () => {
    await fs.writeFile("./customer.json", JSON.stringify(customers, null, 2))
}

readCustomer()