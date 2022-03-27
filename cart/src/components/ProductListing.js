import React from "react"
import data from "../data.json"
import { ProductCard } from "./ProductCard"

export const ProductListing = () => {
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-3 xl:grid-cols-4 p-8 ">
      {data.map((singleProduct) => (
        <ProductCard singleProduct={singleProduct} key={singleProduct.id} />
      ))}
    </div>
  )
}
