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

      <div className="max-w-5xl mx-auto p-5">

        {/* Movie Details */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={movie.img}
            alt={movie.name}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />

          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{movie.name}</h1>
            <p className="text-lg opacity-90">⏳ {movie.time}</p>
            <p className="text-lg opacity-90">⭐ IMDB: {movie.rating}</p>
            <p className="text-lg opacity-90 capitalize">🎬 Category: {movie.category}</p>

            {movie.description && (
              <p className="mt-4 opacity-80">{movie.description}</p>
            )}

            {/* Cast */}
            {movie.cast && (
              <div className="mt-5">
                <h2 className="text-xl font-semibold mb-2">Cast</h2>
                <ul className="list-disc list-inside opacity-90">
                  {movie.cast.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Trailer */}
        {movie.trailer && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">🎥 Watch Trailer</h2>
            <iframe
              width="100%"
              height="400"
              className="rounded-lg shadow-lg"
              src={movie.trailer}
              title="YouTube Trailer"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Episodes (FOR SERIES) */}
        {movie.episodes && movie.episodes.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">📺 Episodes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {movie.episodes.map((ep, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-semibold">{ep.title}</h3>
                  <p className="opacity-80">{ep.time}</p>

                  <a
                    href={ep.download}
                    className="inline-block mt-2 bg-red-600 px-4 py-2 rounded-lg text-white hover:bg-red-700"
                    download
                  >
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Downloads */}
        {movie.downloadLinks && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-3">⬇ Download Movie</h2>

            {movie.downloadLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg my-2 shadow-md"
                download
              >
                {link.quality} Download
              </a>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Others;
