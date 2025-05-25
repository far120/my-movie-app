import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const first = 1;
  const last = 500;
  const [movie, setMovie] = useState([]);
  const [id, setId] = useState(1);
  const path = window.location.href;
  const page = path.split("?")[1]?.split("=")[1];

  useEffect(() => {
    if (page) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&query=${page}&page=${id}`)
        .then((response) => response.json())
        .then((data) => setMovie(data.results))
        .catch((error) => console.error("Error fetching movies:", error));
    } else {
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&page=${id}`)
        .then((response) => response.json())
        .then((data) => setMovie(data.results))
        .catch((error) => console.error("Error fetching movies:", error));
    }
  }, [id]);

  if (!movie || movie.length === 0) {
    return <h2 className="text-center text-2xl text-cyan-400 py-10 animate-pulse">Loading...</h2>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-cyan-400 mb-8 text-center drop-shadow-lg tracking-tight animate-fade-in">Top Movies</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {movie.map((mm, index) =>
          mm.poster_path ? (
            <div
              className="bg-gradient-to-br from-cyan-900/80 via-gray-900/80 to-cyan-800/80 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 hover:shadow-cyan-500/30 transition-transform duration-300 flex flex-col items-center border border-cyan-900/30 group"
              key={`${mm.id}-${index}`}
            >
              <Link to={`/${mm.id}`} className="block w-full h-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${mm.poster_path}`}
                  alt={mm.title}
                  className="w-full h-72 object-cover object-top rounded-t-2xl group-hover:opacity-90 transition duration-200"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-cyan-300 truncate" title={mm.title}>{mm.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">{mm.release_date}</p>
                </div>
              </Link>
            </div>
          ) : null
        )}
      </div>
      <nav className="flex justify-center items-center mt-12 animate-fade-in">
        <ul className="inline-flex items-center space-x-1 bg-white/5 rounded-xl px-4 py-2 shadow-lg">
          <li>
            <button className="px-3 py-1 rounded-l bg-cyan-700 text-white hover:bg-cyan-500 transition disabled:opacity-50" onClick={() => setId(first)} disabled={id === first}>
              First
            </button>
          </li>
          <li>
            <button className="px-3 py-1 bg-cyan-800 text-white hover:bg-cyan-500 transition disabled:opacity-50" onClick={() => setId(id - 1)} disabled={id === first}>
              Previous
            </button>
          </li>
          {id > 1 && (
            <li>
              <button className="px-3 py-1 bg-cyan-900 text-white" onClick={() => setId(id - 1)}>{id - 1}</button>
            </li>
          )}
          <li>
            <button className="px-3 py-1 bg-cyan-400 text-gray-900 font-bold underline" onClick={() => setId(id)}>{id}</button>
          </li>
          {id < last && (
            <li>
              <button className="px-3 py-1 bg-cyan-900 text-white" onClick={() => setId(id + 1)}>{id + 1}</button>
            </li>
          )}
          <li>
            <button className="px-3 py-1 bg-cyan-800 text-white hover:bg-cyan-500 transition disabled:opacity-50" onClick={() => setId(id + 1)} disabled={id === last}>
              Next
            </button>
          </li>
          <li>
            <button className="px-3 py-1 rounded-r bg-cyan-700 text-white hover:bg-cyan-500 transition disabled:opacity-50" onClick={() => setId(last)} disabled={id === last}>
              Last
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
