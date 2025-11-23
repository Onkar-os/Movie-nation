import React from 'react'
import { allMovies,  } from '../data/moviesData'
import { Navigate, useNavigate } from 'react-router-dom'
function Hollywood() {
  const navigate=useNavigate();
   
  const open=(id)=>{
    navigate(`/others/${id}`)
  }

  const hollywood=allMovies.filter(m=>m.category==="hollywood")
  return (
    <div>
        <div className="p-6 bg-black min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Hollywood</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {hollywood.map((movie) => (
          <div
            key={movie.id}
            onClick={()=>open(movie.id)}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={movie.img}
              alt={movie.name}
              className="w-full h-48 object-cover"
            />

            <div className="p-3">
              <h2 className="text-lg font-semibold truncate">{movie.name}</h2>
              <p className="text-sm text-gray-400">⏱ {movie.time}</p>
              <p className="text-sm font-medium mt-1">⭐ IMDb: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
      
    </div>
  )
}

export default Hollywood
