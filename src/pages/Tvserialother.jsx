import React, {useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { sports, tv } from "../data/moviesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Tvserialother() {
  const { id } = useParams();
    const navigate = useNavigate();
  const t = tv.find((t1) => t1.id === Number(id));

 useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        navigate(-1);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);
  if (!t ) {
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
          src={t.img}
          alt={t.name}
          className="w-full h-60 object-cover"
        />

        {/* CONTENT */}
        <div className="p-6">
          <h1 className="text-2xl font-extrabold mb-3">
            {t.name}
          </h1>

          <p className="text-gray-300 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tvserialother;
