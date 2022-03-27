import data from "../data.json"

import React from "react"
import { useCart } from "../context/CartProvider"
import { useNavigate } from "react-router-dom"
export const isAlreadyInCart = (arrayToLookIn, idToLookFor) => {
  return arrayToLookIn.some((product) => product.id === idToLookFor)
}
export const ProductCard = ({ singleProduct }) => {
  const { name, image, price, brand, id } = singleProduct
  const navigate = useNavigate()
  const { cartState, cartDispatch } = useCart()

  const isInCart = isAlreadyInCart(cartState.cart, id)
  return (
    <div className="max-h-50 max-w-xs  ">
      <img
        src={image}
        className="w-full h-48 object-cover"
        loading="lazy"
        alt={""}
      />
      <div className="flex items-baseline flex-col">
        <h2 className="font-semibold">{name}</h2>
        <span>₹ {price}</span>
        <p>{brand}</p>
      </div>

      {isInCart ? (
        <button
          className="bg-gray-400 px-4 py-2 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          Go To Cart
        </button>
      ) : (
        <button
          className="bg-gray-400 px-4 py-2  cursor-pointer"
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
