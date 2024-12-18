import React from 'react'
import CartContext from "./CartContext"
import { useReducer } from 'react'; 

const defaultCartState = {
  items:[],
  totalAmount:0
}
const cartReducer=(state,action) =>{
  if (action.type == 'ADD'){
    const updatedItems = state.items.concat(action.item);//giving a new array instead editing existing array
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
}

const cartProvider = () => {

  const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);
  
  const addItemCartHandler = item =>{
    dispatchCartAction({type:'ADD',item:item});
  };
  const removeItemCartHandler = id =>{
    dispatchCartAction({type:'REMOVE',id:id})
  };

  const cartContext={
    items:cartState.items,
    totalAmount:cartState.totalAmount,
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