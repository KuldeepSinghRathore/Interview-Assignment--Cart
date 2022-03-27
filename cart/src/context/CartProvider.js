import { createContext, useContext, useReducer } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        }
      default:
        return state
    }
  }
  const initialState = {
    cart: [],
  }
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
