import React from "react";
import Navbar from "../components/Navbar";
import { allMovies, cartoons, sports } from "../data/moviesData";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();

  const open = (id) => {
    navigate(`/others/${id}`);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <h2 className="text-2xl font-bold mb-4 text-white px-4">
        All Movies
      </h2>

      {/* 🔥 Horizontal Scroll Container */}
      <div className="flex overflow-x-auto space-x-5 pb-4 px-4 scrollbar-hide">
        {allMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => open(movie.id)}
            className="bg-gray-900 min-w-[200px] rounded-lg cursor-pointer 
                       hover:scale-105 transition-transform duration-300 
                       overflow-hidden shadow-lg"
          >
            <img
              src={movie.img}
              alt={movie.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{movie.name}</h3>
              <p className="text-sm opacity-80">⏳ {movie.time}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white px-4">
        Sports
      </h2>
      
      <div className="flex overflow-x-auto space-x-5 pb-4 px-4 scrollbar-hide">
         {sports.map((sports) => (
          <div
            key={sports.id}
            onClick={() => open(sports.id)}
            className="bg-gray-900 min-w-[200px] rounded-lg cursor-pointer 
                       hover:scale-105 transition-transform duration-300 
                       overflow-hidden shadow-lg"
          >
            <img
              src={sports.img}
              alt={sports.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-3 text-white">
              <h3 className="font-semibold">{sports.name}</h3>
              <p className="text-sm opacity-80">⏳ {sports.description}</p>
              <p className="text-sm opacity-80">⭐ IMDB: {sports.category}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white px-4">
        Cartoons
      </h2>
      
      <div className="flex overflow-x-auto space-x-5 pb-4 px-4 scrollbar-hide">
         {cartoons.map((cartoon) => (
          <div
            key={cartoon.id}
            onClick={() => open(cartoon.id)}
            className="bg-gray-900 min-w-[200px] rounded-lg cursor-pointer 
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
      <Footer />
    </div>
  );
}

export default Home;
