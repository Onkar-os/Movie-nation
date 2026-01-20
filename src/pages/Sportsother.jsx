import React from "react";
import { useParams } from "react-router-dom";
import { sports } from "../data/moviesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Sportsother() {
  const { id } = useParams();
  const sport = sports.find((s) => s.id === Number(id));

  if (!sport ) {
    return (
      <div className="text-white text-center p-10 text-2xl">
         Not Found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={sport.img}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute bottom-10 left-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            {sport.name}
          </h1>

          <p className="mt-3 text-lg opacity-90 flex gap-4">
            
            <span className="capitalize">🎬 {sport.category}</span>
          </p>

          {sport.description && (
            <p className="mt-4 text-gray-200 max-w-xl leading-relaxed">
              {sport.description}
            </p>
          )}
        </div>
      </div>

      
      

      <Footer />
    </div>
  );
}

export default Sportsother;
