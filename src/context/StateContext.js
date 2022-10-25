import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'


export const Context = createContext()

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState()
  const [totalQuantities, setTotalQuantities] = useState()
  const [qty, setQty] = useState(1)

  const idcQty = () => {
    setQty((prevQty) => prevQty + 1)
  }

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1

      return prevQty - 1
    })
  }

  const onAdd = (procuct, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === procuct._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + procuct.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)
    if (checkProductInCart) {

      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === procuct._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
      })

      setCartItems(updatedCartItems)
    } else {
      procuct.quantity = quantity

      setCartItems([...cartItems, { ...procuct }])

    }
    toast.success('Item Added')
    console.log(cartItems);
  }

  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        idcQty,
        decQty,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  )
}


export const useStateContext = () => useContext(Context)



