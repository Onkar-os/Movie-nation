import React from "react";
import { cartoons } from "../data/moviesData";
import { useNavigate } from "react-router-dom";

function Cartoons() {
  const navigate = useNavigate();

  const open = (id) => {
    navigate(`/others/${id}`);
  };

  return (
    <div className="bg-black min-h-screen text-white p-6">

      <h2 className="text-3xl font-extrabold text-white tracking-wide px-6 mb-8 
                     border-l-4 border-green-500 pl-4">
        Cartoons & Animations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 px-2">
        {cartoons.map((cartoon) => (
          <div
            key={cartoon.id}
            onClick={() => open(cartoon.id)}
           className="group bg-[#111] rounded-xl cursor-pointer shadow-xl 
                       hover:shadow-green-500/30 hover:scale-[1.04] 
                       transition-all duration-300 overflow-hidden border 
                       border-gray-800"
          >
            {/* Thumbnail */}
            <div className="relative">
              <img
                src={cartoon.img}
                alt={cartoon.name}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition duration-300"></div>
            </div>

            {/* Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold line-clamp-1">
                {cartoon.name}
              </h3>

              <p className="text-sm opacity-80 mt-1">
                ⏳ {cartoon.description}
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Cartoons;