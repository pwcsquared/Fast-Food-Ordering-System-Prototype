import React from "react"
import MenuItem from "./MenuItem"

function Menu({ data, addToCart }) {
  return (
    <div className="panel menu">
      <h1>Menu</h1>
      {data &&
        data.map((item) => (
          <MenuItem addItem={addToCart} key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Menu
