import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { MENU_URL } from "../../constants"
import mockData from "../../mock/menu-data"

const useFetchMenuData = () => {
  const [menuData, setMenuData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      await fetch(MENU_URL)
        .then((resp) => resp.json())
        .then((data) => {
          setError(null)
          setMenuData(normalizeMenuData(data))
        })
        .catch((error) => {
          setError(error.message)
          console.log(normalizeMenuData(mockData))
          setMenuData(normalizeMenuData(mockData))
        })
    }

    fetchData()
  }, [])

  return { menuData, error }
}

/**
 *
 * Adds an id field to each option
 */
const normalizeOptions = (options) =>
  options.map((option) => {
    return {
      ...option,
      id: uuidv4(),
    }
  })

/**
 *
 * adds an id field to each menu item, and converts `item` field to `name`.
 */
const normalizeMenuData = ({ menu }) => {
  return menu.map(({ item, options }) => {
    const normalizedOptions = normalizeOptions(options)

    return {
      id: uuidv4(),
      name: item,
      options: normalizedOptions,
    }
  })
}

export default useFetchMenuData
