import React from "react";
import Navbar from "../components/Navbar";

import { bollywoodMovies, ottseries, southMovies,hollywood } from "../data/moviesData";
// import Hollywood from "./Hollywood";

function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <h2 className="text-2xl font-bold mb-4 text-white">Featured Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {bollywoodMovies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={movie.img} alt={movie.title} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{movie.name}</h3>
              <p className="text-sm opacity-80">⏳ {movie.time}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {southMovies.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={movie.img} alt={movie.title} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{movie.name}</h3>
              <p className="text-sm opacity-80">⏳ {movie.time}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {movie.imdb}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {hollywood.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={movie.img} alt={movie.title} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{movie.name}</h3>
              <p className="text-sm opacity-80">⏳ {movie.time}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {movie.imdb}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {ottseries.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <img src={movie.img} alt={movie.title} className="w-full h-60 object-cover" />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{movie.name}</h3>
              <p className="text-sm opacity-80">⏳ {movie.time}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {movie.imdb}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
