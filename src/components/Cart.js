import React from "react"
import { formatPrice } from "../helpers"

function Cart({ items }) {
  const foods = items.map(({ id, name, size, price }, index) => (
    <tr key={`${id}-${index}`}>
      <td className="table-desc">
        {name}, {size}
      </td>
      <td className="table-price">{formatPrice(price)}</td>
    </tr>
  ))

  const cartTotal = items.reduce((acc, { price }) => (acc += price), 0)

  return (
    <div className="panel cart">
      <h1>Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th className="table-desc">Item Name</th>
            <th className="table-price">Price</th>
          </tr>
        </thead>
        <tbody>{foods}</tbody>
        {cartTotal > 0 && (
          <tfoot>
            <tr>
              <td className="table-desc">Total</td>
              <td className="table-price">{formatPrice(cartTotal)}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  )
}

export default Cart
