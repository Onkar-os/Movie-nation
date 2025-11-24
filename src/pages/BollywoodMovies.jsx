import React from "react";
import { allMovies } from "../data/moviesData";
import { useNavigate } from "react-router-dom";

function BollywoodMovies() {
  const navigate = useNavigate();

  const open = (id) => {
    navigate(`/others/${id}`);
  };

  const bollywood = allMovies.filter((m) => m.category === "bollywood");

  return (
    <div className="bg-black min-h-screen py-10 px-6">
      
      {/* Title */}
      <h1 className="text-white text-4xl font-extrabold mb-8 tracking-wide">
        Bollywood Movies
      </h1>

      {/* Movies Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {bollywood.map((movie) => (
          <div
            key={movie.id}
            onClick={() => open(movie.id)}
            className="
              bg-gradient-to-b from-gray-900/90 to-gray-800/90 
              rounded-xl overflow-hidden shadow-xl 
              hover:scale-105 hover:shadow-2xl 
              transition-all duration-300 cursor-pointer relative
            "
          >
            {/* Image Wrapper */}
            <div className="relative">
              <img
                src={movie.img}
                alt={movie.name}
                className="w-full h-64 object-cover"
              />

              {/* Hover Overlay */}
              <div className="
                absolute inset-0 
                bg-black/20 
                hover:bg-black/40 
                transition-all duration-300
              "></div>
            </div>

            {/* Details */}
            <div className="p-4 text-white space-y-1">
              <h2 className="text-lg font-semibold line-clamp-1">
                {movie.name}
              </h2>

              <p className="text-sm opacity-70">{movie.time}</p>

              <p className="mt-1 text-yellow-400 font-bold">
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
