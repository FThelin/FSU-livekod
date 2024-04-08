import Header from "./components/Header"
import ProductList from "./components/ProductList"
import CartProvider from "./context/CartContext"

const App = () => (
  <CartProvider>
    <Header />
    <ProductList />
  </CartProvider>
)

export default App