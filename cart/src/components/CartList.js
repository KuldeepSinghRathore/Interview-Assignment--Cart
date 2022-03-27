import React from "react"
import { useCart } from "../context/CartProvider"
import { CartCard } from "./CartCard"

export const CartList = () => {
  const { cartState } = useCart()

  return (
    <div>
      {cartState.cart.map((singleItemCart) => (
        <CartCard singleItemCart={singleItemCart} key={singleItemCart.id} />
      ))}
    </div>
  )
}
