import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allMovies, cartoons, sports, news, tv } from "../data/moviesData";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // MODAL STATE
  const [selectedNews, setSelectedNews] = useState(null);

  // OPEN OTHER PAGES
  const open = (id) => navigate(`/others/${id}`);
  const open1 = (id) => navigate(`/Sportsother/${id}`);
  const open2 = (id) => navigate(`/Cartoonother/${id}`);
  const open4 = (id) => navigate(`/Tvserialother/${id}`);

  // ESC KEY CLOSE MODAL
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedNews(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* ================= ALL MOVIES ================= */}
      <Section title="All Movies">
        {allMovies.map((movie) => (
          <Card key={movie.id} onClick={() => open(movie.id)} img={movie.img}>
            <h3>{movie.name}</h3>
            <p>⏳ {movie.time}</p>
            <p>⭐ IMDB: {movie.rating}</p>
          </Card>
        ))}
      </Section>

      {/* ================= SPORTS ================= */}
      <Section title="Sports">
        {sports.map((sport) => (
          <Card key={sport.id} onClick={() => open1(sport.id)} img={sport.img}>
            <h3>{sport.name}</h3>
            <p>Category: {sport.category}</p>
          </Card>
        ))}
      </Section>

      {/* ================= CARTOONS ================= */}
      <Section title="Cartoons">
        {cartoons.map((cartoon) => (
          <Card key={cartoon.id} onClick={() => open2(cartoon.id)} img={cartoon.img}>
            <h3>{cartoon.name}</h3>
          </Card>
        ))}
      </Section>

      {/* ================= NEWS (MODAL ON CLICK) ================= */}
      <Section title="News">
        {news.map((item) => (
          <Card key={item.id} img={item.img} onClick={() => setSelectedNews(item)}>
            <h3>{item.name}</h3>
          </Card>
        ))}
      </Section>

      {/* ================= TV SERIAL ================= */}
      <Section title="TV Serial">
        {tv.map((tvitem) => (
          <Card key={tvitem.id} onClick={() => open4(tvitem.id)} img={tvitem.img}>
            <h3>{tvitem.name}</h3>
          </Card>
        ))}
      </Section>

      <Footer />

      {/* ================= NEWS MODAL ================= */}
      {selectedNews && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setSelectedNews(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gray-900 text-white w-[90%] md:w-[600px] rounded-xl overflow-hidden shadow-2xl animate-scaleIn"
          >
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-3 right-4 text-2xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            <img
              src={selectedNews.img}
              alt={selectedNews.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h1 className="text-2xl font-extrabold mb-3">
                {selectedNews.name}
              </h1>
              <p className="text-gray-300 leading-relaxed">
                {selectedNews.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

/* ================= COMPONENTS ================= */
function Section({ title, children }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-white px-6 my-4">{title}</h2>
      <div className="flex overflow-x-auto space-x-6 px-6 pb-6">{children}</div>
    </>
  );
}

function Card({ img, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 min-w-[220px] rounded-xl cursor-pointer hover:scale-105 transition-all overflow-hidden"
    >
      <img src={img} className="h-64 w-full object-cover rounded-t-xl" />
      <div className="p-4 text-white">{children}</div>
    </div>
  );
}
