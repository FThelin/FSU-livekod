const Payment = () => {

    const handlePayment = async () => {
        const response = await fetch("http://localhost:3000/payments/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify([
                {
                    product: "price_1OjJm3KDYG89Sk1MV6TKHCWy",
                    quantity: 3
                },
                {
                    product: "price_1OjJkTKDYG89Sk1MeWycVhcr",
                    quantity: 1
                }
            ])
        })
        const data = await response.json()
        localStorage.setItem("sessionId", JSON.stringify(data.sessionId))
        window.location = data.url
    }

    return (
        <div>
            <button onClick={handlePayment}>GE MIG PENGAR!!!!</button>
        </div>
    )
}

export default Payment