import React from "react";
import { bollywoodMovies } from "../data/moviesData";



function BollywoodMovies() {
  return (
    <div className="bg-black min-h-screen py-10 px-6">
      <h1 className="text-white text-3xl font-bold mb-6">
        Bollywood Movies
      </h1>

      {/* Movie Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bollywoodMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Movie Poster */}
            <img
              src={movie.img}
              alt={movie.title}
              className="w-full h-64 object-cover"
            />

            {/* Movie Details */}
            <div className="p-4 text-white">
              <h2 className="text-lg font-semibold">{movie.name}</h2>

              <p className="text-sm text-gray-400">
                {movie.time} 
              </p>

              <p className="mt-2 text-yellow-400 font-semibold">
                ⭐ IMDb: {movie.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BollywoodMovies;
