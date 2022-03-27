import React from "react"
import data from "../data.json"
import { ProductCard } from "./ProductCard"

export const ProductListing = () => {
  return (
    <div className="flex max-w-6xl mx-auto gap-4 ">
      {data.map((singleProduct) => (
        <ProductCard singleProduct={singleProduct} key={singleProduct.id} />
      ))}
    </div>
  )
}
