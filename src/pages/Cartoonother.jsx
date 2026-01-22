import React,{useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { cartoons } from "../data/moviesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Cartoonother() {
  const { id } = useParams();
  const navigate = useNavigate();
  const cartoon = cartoons.find((c) => c.id === Number(id));
 
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  if (!cartoon ) {
    return (
      <div className="text-white text-center p-10 text-2xl">
         Not Found
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center
      animate-fadeIn"
      onClick={() => navigate(-1)}
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gray-900 text-white 
        w-[90%] md:w-[600px] rounded-xl overflow-hidden shadow-2xl
        animate-scaleIn"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-4 text-2xl font-bold
          hover:text-red-400 transition"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={cartoon.img}
          alt={cartoon.name}
          className="w-full h-60 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h1 className="text-2xl font-extrabold mb-3">
            {cartoon.name}
          </h1>

          <p className="text-gray-300 leading-relaxed">
            {cartoon.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cartoonother;
