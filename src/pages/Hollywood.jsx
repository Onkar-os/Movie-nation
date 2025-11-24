import React from "react";
import { allMovies } from "../data/moviesData";
import { useNavigate } from "react-router-dom";

function Hollywood() {
  const navigate = useNavigate();

  const open = (id) => {
    navigate(`/others/${id}`);
  };

  const hollywood = allMovies.filter((m) => m.category === "hollywood");

  return (
    <div className="bg-black min-h-screen p-6 text-white">
      
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold mb-8 tracking-wide">
        Hollywood Movies
      </h1>

      {/* Movies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {hollywood.map((movie) => (
          <div
            key={movie.id}
            onClick={() => open(movie.id)}
            className="
              bg-gradient-to-b from-gray-900/90 to-gray-800/90
              rounded-xl shadow-xl overflow-hidden
              hover:scale-105 hover:shadow-2xl 
              transition-all duration-300 cursor-pointer
            "
          >
            {/* Poster */}
            <div className="relative">
              <img
                src={movie.img}
                alt={movie.name}
                className="w-full h-56 object-cover"
              />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-black/20 hover:bg-black/40 
                  transition duration-300
                "
              ></div>
            </div>

            {/* Details */}
            <div className="p-4 space-y-1">
              <h2 className="text-lg font-semibold line-clamp-1">
                {movie.name}
              </h2>

              <p className="text-sm text-gray-400">⏱ {movie.time}</p>

              <p className="text-yellow-400 font-bold">⭐ IMDb: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hollywood;
