import data from "../data.json"

import React from "react"
import { useCart } from "../context/CartProvider"
import { useNavigate } from "react-router-dom"

export const ProductCard = ({ singleProduct }) => {
  const { name, image, price, brand, id } = singleProduct
  const navigate = useNavigate()
  const { cartState, cartDispatch } = useCart()
  const isAlreadyInCart = (arrayToLookIn, idToLookFor) => {
    return arrayToLookIn.some((product) => product.id === idToLookFor)
  }
  console.log(
    "Hahah",
    isAlreadyInCart(cartState.cart, "86a4d7bb-95b6-45a5-9334-fac1c6062726")
  )

  const isInCart = isAlreadyInCart(cartState.cart, id)
  return (
    <div className="max-h-50 max-w-xs ">
      <img src={image} className="w-full h-full object-contain" />
      <div>
        <h2 className="font-semibold">{name}</h2>
        <span>₹ {price}</span>
        <p>{brand}</p>
      </div>

      {isInCart ? (
        <button
          className="bg-gray-400 px-4 py-2 "
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>
      ) : (
        <button
          className="bg-gray-400 px-4 py-2 "
          onClick={() =>
            cartDispatch({ type: "ADD_TO_CART", payload: singleProduct })
          }
        >
          Add To Cart
        </button>
      )}
    </div>
  )
}
