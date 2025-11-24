import React from 'react'
import { tv } from '../data/moviesData'

function Tvserials() {
  return (
     <div className="bg-black">
          <h2 className="text-2xl font-bold mb-4 text-white px-4">
            Its All About Sports
          </h2>
    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 pb-4">
            {tv.map((tvItem) => (
              <div
                key={tvItem.id}
                onClick={() => open(tvItem.id)}
                className="bg-gray-900 rounded-lg cursor-pointer 
                     hover:scale-105 transition-transform duration-300 
                     overflow-hidden shadow-lg"
              >
                <img
                  src={tvItem.img}
                  alt={tvItem.name}
                  className="w-full h-60 object-cover"
                />
    
                <div className="p-3 text-white">
                  <h3 className="font-semibold">{tvItem.name}</h3>
                  <p className="text-sm opacity-80">⏳ {tvItem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default Tvserials
