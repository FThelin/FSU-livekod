import { Route, Routes } from "react-router-dom"
import Payment from "./Payment"
import Confirmation from "./Confirmation"

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}

export default App