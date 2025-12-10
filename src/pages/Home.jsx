import React from "react";
import Navbar from "../components/Navbar";
import { allMovies, cartoons, sports,news, tv } from "../data/moviesData";
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

      {/* Section Title */}
      <h2 className="text-3xl font-bold mb-4 text-white px-6 tracking-wide 
      mt-4 drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
        All Movies
      </h2>

      {/* Horizontal Scroll (Upgraded UI) */}
      <div className="flex overflow-x-auto space-x-6 pb-6 px-6 hide-scrollbar scroll-smooth 
      snap-x snap-mandatory">

        {allMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => open(movie.id)}
            className="bg-gray-900/70 min-w-[220px] rounded-xl cursor-pointer 
            hover:scale-110 transition-all duration-300 
            backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
            overflow-hidden snap-start border border-gray-800
            hover:border-purple-400/40 hover:shadow-purple-500/30"
          >
            <img
              src={movie.img}
              alt={movie.name}
              className="w-full h-64 object-cover transition-all duration-300 
              hover:brightness-110 hover:contrast-125"
            />

            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">{movie.name}</h3>
              <p className="text-sm opacity-70">⏳ {movie.time}</p>
              <p className="text-sm opacity-70">⭐ IMDB: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Sports Section */}
      <h2 className="text-3xl font-bold mb-4 text-white px-6 tracking-wide
      drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
        Sports
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-6 px-6 hide-scrollbar scroll-smooth 
      snap-x snap-mandatory">

        {sports.map((sports) => (
          <div
            key={sports.id}
            onClick={() => open(sports.id)}
            className="bg-gray-900/70 min-w-[220px] rounded-xl cursor-pointer 
            hover:scale-110 transition-all duration-300 
            backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
            overflow-hidden snap-start border border-gray-800
            hover:border-blue-400/40 hover:shadow-blue-500/30"
          >
            <img
              src={sports.img}
              alt={sports.name}
              className="w-full h-64 object-cover transition-all duration-300
              hover:brightness-110 hover:contrast-125"
            />

            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">{sports.name}</h3>
              <p className="text-sm opacity-70">⏳ {sports.description}</p>
              <p className="text-sm opacity-70">Category: {sports.category}</p>
            </div>
          </div>
        ))}
      </div>


      {/* Cartoons Section */}
      <h2 className="text-3xl font-bold mb-4 text-white px-6 tracking-wide
      drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
        Cartoons
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-6 px-6 hide-scrollbar scroll-smooth 
      snap-x snap-mandatory">

        {cartoons.map((cartoon) => (
          <div
            key={cartoon.id}
            onClick={() => open(cartoon.id)}
            className="bg-gray-900/70 min-w-[220px] rounded-xl cursor-pointer 
            hover:scale-110 transition-all duration-300 
            backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
            overflow-hidden snap-start border border-gray-800
            hover:border-pink-400/40 hover:shadow-pink-500/30"
          >
            <img
              src={cartoon.img}
              alt={cartoon.name}
              className="w-full h-64 object-cover transition-all duration-300
              hover:brightness-110 hover:contrast-125"
            />

            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">{cartoon.name}</h3>
              <p className="text-sm opacity-70">⏳ {cartoon.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* news */}
        <h2 className="text-3xl font-bold mb-4 text-white px-6 tracking-wide
      drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
        News
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-6 px-6 hide-scrollbar scroll-smooth 
      snap-x snap-mandatory">

        {news.map((newsItem) => (
          <div
            key={newsItem.id}
            onClick={() => open(newsItem.id)}
            className="bg-gray-900/70 min-w-[220px] rounded-xl cursor-pointer 
            hover:scale-110 transition-all duration-300 
            backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
            overflow-hidden snap-start border border-gray-800
            hover:border-pink-400/40 hover:shadow-pink-500/30"
          >
            <img
              src={newsItem.img}
              alt={newsItem.name}
              className="w-full h-64 object-cover transition-all duration-300
              hover:brightness-110 hover:contrast-125"
            />

            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">{newsItem.name}</h3>
              <p className="text-sm opacity-70">⏳ {newsItem.description}</p>
            </div>
          </div>
        ))}
      </div>


      {/* tv serial  */}
      
      <h2 className="text-3xl font-bold mb-4 text-white px-6 tracking-wide
      drop-shadow-[0_2px_6px_rgba(255,255,255,0.3)]">
        Tv Serial
      </h2>

      <div className="flex overflow-x-auto space-x-6 pb-6 px-6 hide-scrollbar scroll-smooth 
      snap-x snap-mandatory">

        {tv.map((tvitem) => (
          <div
            key={tvitem.id}
            onClick={() => open(tvitem.id)}
            className="bg-gray-900/70 min-w-[220px] rounded-xl cursor-pointer 
            hover:scale-110 transition-all duration-300 
            backdrop-blur-xl shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.12)]
            overflow-hidden snap-start border border-gray-800
            hover:border-pink-400/40 hover:shadow-pink-500/30"
          >
            <img
              src={tvitem.img}
              alt={tvitem.name}
              className="w-full h-64 object-cover transition-all duration-300
              hover:brightness-110 hover:contrast-125"
            />

            <div className="p-4 text-white">
              <h3 className="font-semibold text-lg">{tvitem.name}</h3>
              <p className="text-sm opacity-70">⏳ {tvitem.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
