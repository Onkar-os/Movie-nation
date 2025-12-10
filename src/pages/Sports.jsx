import React from "react";
import { sports } from "../data/moviesData.js";

function Sports() {
  return (
    <div className="bg-black min-h-screen py-10">
      {/* Heading */}
      <h2 className="text-3xl font-extrabold text-white tracking-wide px-6 mb-8 
                     border-l-4 border-green-500 pl-4">
        It's All About Sports
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      lg:grid-cols-4 gap-6 px-6">
        {sports.map((sport) => (
          <div
            key={sport.id}
            onClick={() => open(sport.id)}
            className="group bg-[#111] rounded-xl cursor-pointer shadow-xl 
                       hover:shadow-green-500/30 hover:scale-[1.04] 
                       transition-all duration-300 overflow-hidden border 
                       border-gray-800"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={sport.img}
                alt={sport.name}
                className="w-full h-60 object-cover group-hover:scale-110 
                           transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 text-white space-y-1">
              <h3 className="font-semibold text-lg group-hover:text-green-400 transition">
                {sport.name}
              </h3>
              <p className="text-sm text-gray-400">⏳ {sport.description}</p>
              <p className="text-sm text-gray-400"> {sport.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;


