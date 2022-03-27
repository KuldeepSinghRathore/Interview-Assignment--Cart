import { Header } from "./components/Header"
import { ProductCard } from "./components/ProductCard"
import { ProductListing } from "./components/ProductListing"
import { Routes, Route } from "react-router-dom"
import { HomePage } from "./Pages/HomePage"
import { Cart } from "./Pages/Cart"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
