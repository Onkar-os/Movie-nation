import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { allMovies, cartoons, sports, news, tv } from "../data/moviesData";

function Home() {
  const [modalData, setModalData] = useState(null);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setModalData(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      {/* ================= MOVIES ================= */}
      <Section title="All Movies">
        {allMovies.map((movie) => (
          <Card
            key={movie.id}
            img={movie.img}
            onClick={() => setModalData({ type: "movie", data: movie })}
          >
            <h3>{movie.name}</h3>
            <p>⭐ {movie.rating}</p>
          </Card>
        ))}
      </Section>

      {/* ================= SPORTS ================= */}
      <Section title="Sports">
        {sports.map((sport) => (
          <Card
            key={sport.id}
            img={sport.img}
            onClick={() => setModalData({ type: "sports", data: sport })}
          >
            <h3>{sport.name}</h3>
          </Card>
        ))}
      </Section>

      {/* ================= CARTOONS ================= */}
      <Section title="Cartoons">
        {cartoons.map((cartoon) => (
          <Card
            key={cartoon.id}
            img={cartoon.img}
            onClick={() => setModalData({ type: "cartoon", data: cartoon })}
          >
            <h3>{cartoon.name}</h3>
          </Card>
        ))}
      </Section>

      {/* ================= NEWS ================= */}
      <Section title="News">
        {news.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            onClick={() => setModalData({ type: "news", data: item })}
          >
            <h3>{item.name}</h3>
          </Card>
        ))}
      </Section>

      {/* ================= TV SERIAL ================= */}
      <Section title="TV Serial">
        {tv.map((tvitem) => (
          <Card
            key={tvitem.id}
            img={tvitem.img}
            onClick={() => setModalData({ type: "tv", data: tvitem })}
          >
            <h3>{tvitem.name}</h3>
          </Card>
        ))}
      </Section>

      <Footer />

      {/* ================= MODAL ================= */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={() => setModalData(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 text-white w-[95%] md:w-[900px] max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative"
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-3 right-4 text-2xl font-bold hover:text-red-400"
            >
              ✕
            </button>

            {/* ================= MOVIE MODAL ================= */}
            {modalData.type === "movie" && (
              <>
                <img
                  src={modalData.data.img}
                  className="w-full h-72 object-cover"
                />

                <div className="p-6 space-y-4">
                  <h1 className="text-3xl font-extrabold">
                    {modalData.data.name}
                  </h1>

                  <p className="flex gap-4 text-gray-300">
                    <span>⏳ {modalData.data.time}</span>
                    <span>⭐ {modalData.data.rating}</span>
                    <span>🎬 {modalData.data.category}</span>
                  </p>

                  <p className="text-gray-300">
                    {modalData.data.description}
                  </p>

                  {/* CAST */}
                  {modalData.data.cast && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">🎭 Cast</h2>
                      <div className="flex flex-wrap gap-2">
                        {modalData.data.cast.map((actor, i) => (
                          <span
                            key={i}
                            className="px-4 py-1 bg-gray-800 rounded-full"
                          >
                            {actor}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TRAILER */}
                  {modalData.data.trailer && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">🎥 Trailer</h2>
                      <iframe
                        width="100%"
                        height="400"
                        src={modalData.data.trailer}
                        title="Trailer"
                        allowFullScreen
                        className="rounded-xl"
                      ></iframe>
                    </div>
                  )}

                  {/* DOWNLOAD */}
                  {modalData.data.downloadLinks && (
                    <div>
                      <h2 className="text-xl font-bold mb-2">⬇ Download</h2>
                      <div className="space-y-3">
                        {modalData.data.downloadLinks.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            className="block bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg"
                            download
                          >
                            {link.quality} Download
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* ================= OTHER MODALS ================= */}
            {modalData.type !== "movie" && (
              <>
                <img
                  src={modalData.data.img}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">
                  <h1 className="text-2xl font-bold">
                    {modalData.data.name}
                  </h1>

                  {modalData.data.description && (
                    <p className="text-gray-300 mt-3">
                      {modalData.data.description}
                    </p>
                  )}

                  {modalData.data.category && (
                    <p className="mt-2">📌 {modalData.data.category}</p>
                  )}
                </div>
              </>
            )}
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
      <div className="flex overflow-x-auto space-x-6 px-6 pb-6">
        {children}
      </div>
    </>
  );
}

function Card({ img, onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-900 min-w-[220px] rounded-xl cursor-pointer hover:scale-105 transition-all overflow-hidden"
    >
      <img src={img} className="h-64 w-full object-cover" />
      <div className="p-4 text-white">{children}</div>
    </div>
  );
}
