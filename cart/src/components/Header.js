import React from "react"

export const Header = () => {
  return (
    <div className="bg-blue-500 flex h-10 items-center justify-between px-2 font-semibold text-white">
      <span className="font-bold">FakeCart</span>
      <ul className="flex items-center justify-between   ">
        <li className="border-2 px-5">Cart</li>
        <li className="border-2 ml-2 px-5">Saved Item</li>
      </ul>
    </div>
  )
}
