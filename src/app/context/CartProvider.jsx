'use client'
import React, { useContext, useReducer } from 'react'
import { createContext } from 'react'

const CartContext = createContext()

const initialState = {
  cart: [],
  total_items: 0,
  total_price: 0,
  special: { id: 1, name: '', price: 1, quantity: 1, image: '' }
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      let { id, name, price, quantity, image } = action.payload
      let existingItem = state.cart.find(item => item.id === id)

      let updatedCart
      if (existingItem) {
        updatedCart = state.cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        )
      } else {
        let newItem = { id, name, price, quantity, image }
        updatedCart = [...state.cart, newItem]
      }

      let newTotalItems = updatedCart.reduce((acc, item) => acc + item.quantity, 0)
      let newTotalPrice = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)

      return { ...state, cart: updatedCart, total_items: newTotalItems, total_price: newTotalPrice }
    }

    case 'REMOVE': {
      let updatedCart = state.cart.filter(item => item.id !== action.payload.id)

      let newTotalItems = updatedCart.reduce((acc, item) => acc + item.quantity, 0)
      let newTotalPrice = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0)

      return { ...state, cart: updatedCart, total_items: newTotalItems, total_price: newTotalPrice }
    }

    case 'SPECIAL': {
      const { id, name, price, quantity, image } = action.payload
      const newSpecialItem = { id, name, price, quantity, image }
      return { ...state, special: newSpecialItem }
    }

    default:
      return state
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const add = (id, name, price, quantity, image) => {
    dispatch({ type: 'ADD', payload: { id, name, price, quantity, image } })
  }

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: { id } })
  }

  const setSpecial = (id, name, price, quantity, image) => {
    dispatch({ type: 'SPECIAL', payload: { id, name, price, quantity, image } })
  }

  return (
    <CartContext.Provider value={{ ...state, add, remove, setSpecial }}>
      {children}
    </CartContext.Provider>
  )
}

const useCartContext = () => {
  return useContext(CartContext)
}

export { CartProvider, useCartContext }
