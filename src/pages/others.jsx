import React from "react";
import { useParams } from "react-router-dom";
import { allMovies } from "../data/moviesData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Others() {
  const { id } = useParams();
  const movie = allMovies.find((m) => m.id === Number(id));

  if (!movie) {
    return (
      <div className="text-white text-center p-10 text-2xl">
        Movie Not Found
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      {/* HERO SECTION */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={movie.img}
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

        <div className="absolute bottom-10 left-10 max-w-2xl">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            {movie.name}
          </h1>

          <p className="mt-3 text-lg opacity-90 flex gap-4">
            <span>⏳ {movie.time}</span>
            <span>⭐ {movie.rating}</span>
            <span className="capitalize">🎬 {movie.category}</span>
          </p>

          {movie.description && (
            <p className="mt-4 text-gray-200 max-w-xl leading-relaxed">
              {movie.description}
            </p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-5">

        {/* TRAILER */}
        {movie.trailer && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-4">
              🎥 Watch Trailer
            </h2>

            <div className="rounded-xl overflow-hidden shadow-xl shadow-red-900/40 border border-red-700/30">
              <iframe
                width="100%"
                height="420"
                className="rounded-xl"
                src={movie.trailer}
                title="YouTube Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* CAST */}
        {movie.cast && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-3">🎭 Cast</h2>

            <div className="flex flex-wrap gap-3">
              {movie.cast.map((actor, index) => (
                <div
                  key={index}
                  className="px-5 py-2 bg-gray-900 border border-gray-700 rounded-full 
                             shadow-md hover:shadow-red-700/40 hover:-translate-y-1 
                             transition-all duration-300 cursor-default"
                >
                  {actor}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* EPISODES */}
        {movie.episodes && movie.episodes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">📺 Season 1 Episodes</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {movie.episodes.map((ep, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-5 rounded-xl border border-gray-700 
                             hover:shadow-xl hover:shadow-blue-700/40 transition-all"
                >
                  <h3 className="text-xl font-semibold">{ep.title}</h3>
                  <p className="opacity-80">{ep.time}</p>

                  <a
                    href={ep.download}
                    className="inline-block mt-3 bg-blue-600 px-4 py-2 rounded-lg 
                               hover:bg-blue-700 transition-all shadow-md"
                    download
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOWNLOAD LINKS */}
        {movie.downloadLinks && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">⬇ Download Movie</h2>

            <div className="space-y-4">
              {movie.downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block bg-red-600 hover:bg-red-700 
                             text-white px-5 py-3 rounded-lg shadow-lg 
                             border border-red-800/40 transition-all"
                  download
                >
                  {link.quality} Download
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Others;
