import React from "react"
import { useCart } from "../context/CartProvider"
import { isAlreadyInCart } from "./ProductCard"
// const singleItemCart = {
//   id: "bb463b8b-b76c-4f6a-9726-65ab5730b69b",
//   name: "Generic Concrete Table",
//   image:
//     "https://rukminim2.flixcart.com/image/612/612/kiw1dow0-0/portable-laptop-table/x/k/e/plywood-80007-hariom-all-in-one-wooden-original-imafykngt4etzcxp.jpeg?q=70",
//   price: "84.00",
//   material: "Granite",
//   brand: "quo",
// }
export const CartCard = ({ singleItemCart, saveLater }) => {
  const { cartDispatch, cartState } = useCart()
  const { name, id, image, price, qty } = singleItemCart
  const isInSaveLater = isAlreadyInCart(cartState.saveLater, id)
  return (
    <div className="flex items-center">
      <img
        src={image}
        alt=""
        width={250}
        height={250}
        className="object-contain"
      />
      <div>
        <p>{name}</p>
        <p>₹ {price}</p>
        <div className="flex justify-around mt-2 ">
          <button
            className={`${
              qty === 1 && "cursor-not-allowed"
            } px-2 py-1  bg-gray-400 `}
            onClick={() =>
              !saveLater
                ? cartDispatch({
                    type: "DECREASE_QTY",
                    payload: { id, qty: qty - 1, flag: "cart" },
                  })
                : cartDispatch({
                    type: "DECREASE_QTY",
                    payload: { id, qty: qty - 1, flag: "saveLater" },
                  })
            }
          >
            -
          </button>
          {qty}
          <button
            className="px-2 py-1  bg-gray-400 cursor-pointer"
            onClick={() =>
              !saveLater
                ? cartDispatch({
                    type: "INCREASE_QTY",
                    payload: { id, qty: qty + 1, flag: "cart" },
                  })
                : cartDispatch({
                    type: "INCREASE_QTY",
                    payload: { id, qty: qty + 1, flag: "saveLater" },
                  })
            }
          >
            +
          </button>
        </div>
        {!saveLater ? (
          <>
            <div
              className="bg-blue-600 text-center text-white mt-3 rounded-sm cursor-pointer"
              onClick={() =>
                cartDispatch({
                  type: "REMOVE_FROM_CART",
                  payload: id,
                })
              }
            >
              Remove From Cart
            </div>
            <div
              className={`${
                isInSaveLater && "cursor-not-allowed"
              } bg-blue-600 text-center text-white mt-3 rounded-sm cursor-pointer`}
              onClick={() =>
                !isInSaveLater &&
                cartDispatch({
                  type: "ADD_TO_SAVE_LATER",
                  payload: singleItemCart,
                })
              }
            >
              Save For Later
            </div>
          </>
        ) : (
          <button
            className="bg-blue-600 text-center text-white mt-3 rounded-sm cursor-pointer"
            onClick={() =>
              cartDispatch({ type: "MOVE_TO_CART", payload: singleItemCart })
            }
          >
            Move To Cart
          </button>
        )}
      </div>
    </div>
  )
}
