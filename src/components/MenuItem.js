import React, { useState } from "react"
import ItemOptions from "./ItemOptions"

function MenuItem({ item, addItem }) {
  const [selectedOption, setSelectedOption] = useState(null)

  function handleSubmit() {
    addItem(item, selectedOption)
    setSelectedOption(null)
  }

  return (
    <div className="menu-item">
      <h2>{item.name}</h2>
      <ItemOptions
        changeSelection={setSelectedOption}
        selected={selectedOption}
        options={item.options}
      />
      <button disabled={!selectedOption} onClick={handleSubmit}>
        Add to Cart
      </button>
    </div>
  )
}

export default MenuItem
