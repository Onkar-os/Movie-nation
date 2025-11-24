import React from 'react'
import { cartoons } from '../data/moviesData'

function Cartoons() {
  return (
     <div className="bg-black">
          <h2 className="text-2xl font-bold mb-4 text-white px-4">
            Its All About Cartoons and Animations
          </h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 pb-4">
            {cartoons.map((cartoon) => (
              <div
                key={cartoon.id}
                onClick={() => open(cartoon.id)}
                className="bg-gray-900 rounded-lg cursor-pointer 
                     hover:scale-105 transition-transform duration-300 
                     overflow-hidden shadow-lg"
              >
                <img
                  src={cartoon.img}
                  alt={cartoon.name}
                  className="w-full h-60 object-cover"
                />
    
                <div className="p-3 text-white">
                  <h3 className="font-semibold">{cartoon.name}</h3>
                  <p className="text-sm opacity-80">⏳ {cartoon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Cartoons
