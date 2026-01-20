import React from "react";
import { useParams } from "react-router-dom";
import {  news, tv } from "../data/moviesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Newsother() {
  const { id } = useParams();
  const new1 = news.find((n) => n.id === Number(id));

  if (!new1) {
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
          src={new1.img}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute bottom-10 left-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            {new1.name}
          </h1>

          

          {new1.description && (
            <p className="mt-4 text-gray-200 max-w-xl leading-relaxed">
              {new1.description}
            </p>
          )}
        </div>
      </div>

      
      

      <Footer />
    </div>
  );
}

export default Newsother;
