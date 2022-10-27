import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'


export const Context = createContext()

export const StateContext = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct




  const onAdd = (product) => {

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1)

    setCartItems([...cartItems, { ...product }])

    toast.success(`${qty}x ${product.name} added to the cart`)

  }



  const onRemove = (productRemove) => {
    foundProduct = cartItems.find((item) => item.id === productRemove.id)
    const newCartItems = cartItems.filter((product) => product !== productRemove)

    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
    setCartItems(newCartItems)
  }


  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantities,


        qty,
        onAdd,
        onRemove

      }}
    >
      {children}
    </Context.Provider>
  )
}


export const useStateContext = () => useContext(Context)



