import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-hot-toast'


export const Context = createContext()

export const StateContext = ({ children }) => {

  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalQuantities, setTotalQuantities] = useState(0)
  const [qty, setQty] = useState(1)

  let foundProduct




  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item) => item._id === product._id)

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity)
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity)

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity
          }
      })

      setCartItems([...updatedCartItems, { ...product }])
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, { ...product }])

    }
    toast.success(`${qty}x ${product.name} added to the cart`)
    console.log(cartItems);
  }



  const onRemove = (product) => {
    const newCartItems = cartItems.filter((item) => item.name !== product.name)
    foundProduct = cartItems.find((item) => item.name === product.name)

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



