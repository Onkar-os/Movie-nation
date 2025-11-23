import React from "react";
import Navbar from "../components/Navbar";

import {  allMovies } from "../data/moviesData";
// import Hollywood from "./Hollywood";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import others from "./Others";

function Home() {
  const navigate = useNavigate();
  const open = (id) =>{
         navigate(`/others/${id}`) 
  }
  const bollywood = allMovies.filter(m => m.category === "bollywood");
const south = allMovies.filter(m => m.category === "south");
const ott = allMovies.filter(m => m.category === "ott");
const hollywood = allMovies.filter(m => m.category === "hollywood");

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <h2 className="text-2xl font-bold mb-4 text-white">Featured Movies</h2>

      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {bollywood.map((movie, index) => (
          <div
            key={index}
            onClick={() => open(movie.id)}
            className="bg-gray-900 rounded-lg  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
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
        {south.map((movie, index) => (
          <div
            key={index}
            onClick={() => open(movie.id)}
            className="bg-gray-900 rounded-lg  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
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
      <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {ott.map((movie, index) => (
          <div
            key={index}
            onClick={() => open(movie.id)}
            className="bg-gray-900 rounded-lg  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
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
            onClick={() => open(movie.id)}
            className="bg-gray-900 rounded-lg  hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
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
      <Footer></Footer>
    </div>
  );
}

export default Home;
