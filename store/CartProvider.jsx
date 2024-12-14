import React from 'react'
import CartContext from "./CartContext"

const cartProvider = () => {
  const addItemCartHandler = item =>{};
  const removeItemCartHandler = item =>{};

  const cartContext={
    items:[],
    totalAmount:0,
    addItem:addItemCartHandler,
    removeItem:removeItemCartHandler
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default cartProvider