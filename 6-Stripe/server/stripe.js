const Stripe = require("stripe")

const initStripe = () => {
    const apiKey = process.env.STRIPE_KEY
    if (!apiKey) return
    return new Stripe(apiKey, {
        apiVersion: "2023-10-16"
    })
}

module.exports = initStripe