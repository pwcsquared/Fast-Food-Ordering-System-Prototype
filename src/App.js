import React, { useState } from "react"
import "./App.css"
import Menu from "./components/Menu"
import Cart from "./components/Cart"
import useFetchMenuData from "./hooks/useFetchMenuData"

function App() {
  const [cartItems, setCartItems] = useState([])
  const { menuData, error } = useFetchMenuData()

  function handleAddToCart(item, optionID) {
    const { size, price } = item.options.find(
      (option) => option.id === optionID
    )

    const newCartItem = {
      id: item.id,
      name: item.name,
      size: size,
      price: price,
    }

    const newItems = [...cartItems, newCartItem]

    setCartItems(newItems)
  }

  return (
    <div className="App">
      <Menu data={menuData} addToCart={handleAddToCart} />
      <Cart items={cartItems} />
      {error && <p>{error.message}</p>}
    </div>
  )
}

export default App
