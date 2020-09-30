import React from "react"
import { formatPrice } from "../helpers"

function ItemOptions({ options, selected, changeSelection }) {
  const handleOptionChange = (evt) => {
    changeSelection(evt.target.value)
  }

  return options.map(({ id, size, price }) => (
    <div className="item-options" key={id}>
      <label className="item-option">
        <input
          type="radio"
          value={id}
          checked={id === selected}
          onChange={handleOptionChange}
        />
        {size} {formatPrice(price)}
      </label>
    </div>
  ))
}

export default ItemOptions
