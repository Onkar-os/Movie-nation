import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allMovies } from "../data/moviesData";

function Others() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = allMovies.find((m) => m.id === Number(id));

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") navigate(-1);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [navigate]);

  if (!movie) {
    return (
      <div className="text-white text-center p-10 text-2xl">Not Found</div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center animate-fadeIn"
      onClick={() => navigate(-1)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-gray-900 text-white w-[90%] md:w-[800px] rounded-xl overflow-hidden shadow-2xl animate-scaleIn max-h-[90vh] overflow-y-auto"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-3 right-4 text-2xl font-bold hover:text-red-400"
        >
          ✕
        </button>

        {/* HERO IMAGE */}
        <img
          src={movie.img}
          alt={movie.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-extrabold mb-3">{movie.name}</h1>

          <p className="mt-2 flex flex-wrap gap-3">
            {movie.time && <span>⏳ {movie.time}</span>}
            {movie.rating && <span>⭐ {movie.rating}</span>}
            {movie.category && (
              <span className="capitalize">🎬 {movie.category}</span>
            )}
          </p>

          {movie.description && (
            <p className="mt-4 text-gray-300 leading-relaxed">
              {movie.description}
            </p>
          )}

          {/* TRAILER */}
          {movie.trailer && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">🎥 Watch Trailer</h2>
              <iframe
                width="100%"
                height="300"
                src={movie.trailer}
                title="YouTube Trailer"
                frameBorder="0"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          )}

          {/* CAST */}
          {movie.cast && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">🎭 Cast</h2>
              <div className="flex flex-wrap gap-2">
                {movie.cast.map((actor, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* EPISODES / MOVIE */}
          {movie.Movie && movie.Movie.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">📺 Movie</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {movie.Movie.map((ep, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800 p-3 rounded-xl border border-gray-700 hover:shadow-xl transition-all"
                  >
                    <h3 className="font-semibold">{ep.title}</h3>
                    <p className="opacity-80">{ep.time}</p>
                    <a
                      href={ep.Watch}
                      className="mt-2 inline-block bg-blue-600 px-3 py-1 rounded-lg hover:bg-blue-700 transition-all shadow-md"
                      download
                    >
                      Watch
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* DOWNLOAD LINKS */}
          {movie.downloadLinks && (
            <div className="mt-6">
              <h2 className="text-2xl font-bold mb-2">⬇ Download Movie</h2>
              <div className="space-y-2">
                {movie.downloadLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg border border-red-800/40 transition-all"
                    download
                  >
                    {link.quality} Download
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Others;
