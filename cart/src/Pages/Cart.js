import React from "react"
import { CartList } from "../components/CartList"
import { SavedList } from "../components/SavedList"
import { useCart } from "../context/CartProvider"

export const Cart = () => {
  const { cartState } = useCart()

  const totalAmountCalculator = (cartArray) => {
    const reducer = (acc, curr) => {
      // acc  = parseInt(acc) + parseInt(curr.price)
      // acc = acc + curr.price*1
      acc = acc + +curr.price * curr.qty
      return acc
    }
    const total = cartArray.reduce(reducer, 0)
    return total
  }
  return (
    <>
      Cart
      <div className="flex justify-around">
        {/* <pre> {JSON.stringify(cartState.cart, undefined, 2)}</pre> */}
        <CartList />
        <div>
          <h2>Your Total </h2>
          <p>Price: {totalAmountCalculator(cartState.cart)}</p>
        </div>
      </div>
      <SavedList />
    </>
  )
}
