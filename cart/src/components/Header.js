import React from "react"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div className="bg-blue-500 flex h-10 items-center justify-between px-2 font-semibold text-white">
      <Link to={"/"} className="font-bold cursor-pointer">
        FakeCart
      </Link>
      <ul className="flex items-center justify-between  cursor-pointer ">
        <Link to="/cart">
          {" "}
          <li className="border-2 px-5">Cart</li>
        </Link>
        <Link to={"/saved"}>
          <li className="border-2 ml-2 px-5">Saved Item</li>
        </Link>
      </ul>
    </div>
  )
}
