import React from "react"
import { useCart } from "../context/CartProvider"
import { CartCard } from "./CartCard"

export const SavedList = () => {
  const { cartState } = useCart()

  return (
    <div>
      <h2>Saved Later</h2>
      {cartState.saveLater.map((singleItemCart) => (
        <CartCard
          singleItemCart={singleItemCart}
          saveLater={"saveLater"}
          key={singleItemCart.id}
        />
      ))}
    </div>
  )
}
