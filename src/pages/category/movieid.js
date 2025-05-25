import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Movieid() {
    const id = window.location.pathname.split('/').slice(-1)[0];
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&append_to_response=credits`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(err => {
                console.error("Error: " + err);
            });
    }, [id]);

    if (!data) {
        return <div className="text-center text-cyan-400 text-2xl py-10 animate-pulse">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-cyan-900/80 via-gray-900/80 to-cyan-800/80 rounded-2xl shadow-2xl p-8 md:p-12 text-white flex flex-col gap-6 mt-8 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
                    alt={data.title}
                    className="w-64 h-96 object-cover rounded-xl shadow-lg border-4 border-cyan-900/40"
                />
                <div className="flex-1 flex flex-col gap-2">
                    <h2 className="text-3xl font-extrabold text-cyan-300 mb-2 drop-shadow-lg">{data.title}</h2>
                    <p className="text-gray-200 italic mb-2">{data.tagline}</p>
                    <p className="text-gray-300 mb-4">{data.overview}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {data.genres.map((g) => (
                            <span key={g.id} className="bg-cyan-700/60 text-xs px-3 py-1 rounded-full text-cyan-100 font-semibold">{g.name}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span>⭐ {data.vote_average}</span>
                        <span>📅 {data.release_date}</span>
                        <span>🔥 {data.popularity}</span>
                        <span>💰 ${data.revenue.toLocaleString()}</span>
                        <span>🎬 {data.status}</span>
                        <span>🎞️ {data.original_language.toUpperCase()}</span>
                    </div>
                    <Link to={data.homepage || "#"} target="_blank" rel="noopener noreferrer">
                        <button className="mt-4 bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold px-6 py-2 rounded-lg shadow transition-all">Watch Film</button>
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Cast</h3>
                    <p className="text-gray-200">{data.credits && data.credits.cast && data.credits.cast.slice(0, 5).map((c) => c.name).join(', ')}</p>
                </div>
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Crew</h3>
                    <p className="text-gray-200">{data.credits && data.credits.crew && data.credits.crew.slice(0, 5).map((c) => c.name).join(', ')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Production Companies</h3>
                    <p className="text-gray-200">{data.production_companies.map((c) => c.name).join(', ')}</p>
                </div>
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Production Countries</h3>
                    <p className="text-gray-200">{data.production_countries.map((c) => c.name).join(', ')}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Spoken Languages</h3>
                    <p className="text-gray-200">{data.spoken_languages.map((c) => c.name).join(', ')}</p>
                </div>
                <div>
                    <h3 className="text-cyan-300 font-semibold mb-2">Budget</h3>
                    <p className="text-gray-200">${data.budget.toLocaleString()}</p>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-4">
                <span>IMDB ID: {data.imdb_id}</span>
                <span>Vote Count: {data.vote_count}</span>
                <span>In Cinemas: {data.in_production ? "Yes" : "No"}</span>
                <span>Adult: {data.adult ? "Yes" : "No"}</span>
                <span>Video: {data.video ? "Yes" : "No"}</span>
            </div>
        </div>
    );
}
