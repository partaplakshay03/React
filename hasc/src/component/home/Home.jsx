import React from 'react'
import {Data} from './Data.jsx'

export default function Home() {
   
 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8 bg-gray-100 min-h-screen">

  {Data.map(({ name, Offer, price, img }, index) => (
    <div
      key={index}
      className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-200"
    >

      {/* Offer Badge */}
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-gradient-to-r from-red-600 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
          {Offer}% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-5">

        <h2 className="text-lg font-bold text-gray-800 truncate group-hover:text-blue-600 transition">
          {name}
        </h2>

        {/* Rating */}
        <div className="flex items-center mt-3">
          <span className="text-yellow-500 text-lg">
            ⭐⭐⭐⭐⭐
          </span>
          <span className="text-gray-500 text-sm ml-2">
            (245)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-3xl font-extrabold text-green-600">
            ₹{price}
          </span>

          <span className="text-gray-400 line-through text-lg">
            ₹399
          </span>
        </div>

        <p className="text-green-600 text-sm font-semibold mt-2">
          Free Delivery 🚚
        </p>

        {/* Button */}
        <button className="w-full mt-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
          🛒 Add to Cart
        </button>

      </div>
    </div>
  ))}
</div>
  )
}