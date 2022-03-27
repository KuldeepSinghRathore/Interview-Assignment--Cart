import { createContext, useContext, useReducer } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        action.payload.qty = 1
        return { ...state, cart: [...state.cart, action.payload] }
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        }
      case "INCREASE_QTY":
        return {
          ...state,
          [action.payload.flag]: state[action.payload.flag].map((i) =>
            i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
          ),
        }
      case "DECREASE_QTY":
        return {
          ...state,
          [action.payload.flag]: state[action.payload.flag].map((i) =>
            i.id === action.payload.id && i.qty > 1
              ? { ...i, qty: action.payload.qty }
              : i
          ),
        }
      case "ADD_TO_SAVE_LATER":
        return {
          ...state,
          saveLater: [...state.saveLater, action.payload],
          cart: state.cart.filter((i) => i.id !== action.payload.id),
        }
      case "MOVE_TO_CART":
        return {
          ...state,
          cart: [
            ...state.cart.filter((i) => i.id !== action.payload.id),
            action.payload,
          ],
          saveLater: state.saveLater.filter((i) => i.id !== action.payload.id),
        }
      default:
        return state
    }
  }
  const initialState = {
    cart: [],
    saveLater: [],
  }
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
