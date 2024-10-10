import { useEffect, useState } from "react";
import "./movieid.css";
import { Link } from "react-router-dom";

export default function Movieid() {
    const id = window.location.pathname.split('/').slice(-1)[0];
    const [data, setData] = useState(null);  // Initialize state with null to check if data is loaded
    

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&append_to_response=credits`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                console.log(data);
            })
            .catch(err => {
                console.error("Error: " + err);
                
            });
    }, [id]);

   

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div className="movieid">
            <img 
                src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
                alt={data.title} 
                width="280" 
                height="280" 
            /> 
            <h2>{data.title}</h2>
            <Link to={data.homepage}><button className="btn btn-primary" style={{alignSelf:"center"}}>watch film</button></Link>
            <p>{data.overview}</p>
            <h3>Rating: {data.vote_average}</h3>
            <h3>Release Date: {data.release_date}</h3>
            <h3>Popularity: {data.popularity}</h3>
            <h3>Genres: {data.genres.map((g) => g.name).join(', ')}</h3>
            <h3>Revenue: ${data.revenue.toLocaleString()}</h3>
            <h3>Budget: ${data.budget.toLocaleString()}</h3>
            {data.credits && data.credits.cast && (
                <h3>Cast: {data.credits.cast.slice(0, 5).map((c) => c.name).join(', ')}</h3>
            )}
            {data.credits && data.credits.crew && (
                <h3>Crew: {data.credits.crew.slice(0, 5).map((c) => c.name).join(', ')}</h3>
            )}
            <h3>Status: {data.status}</h3>
            <h3>Tagline: {data.tagline}</h3>
            <h3>Homepage: {data.homepage}</h3>
            <h3>Original Language: {data.original_language}</h3>
            <h3>Original Title: {data.original_title}</h3>
            <h3>Backdrop Path: {data.backdrop_path}</h3>
            <h3>Adult: {data.adult ? "Yes" : "No"}</h3>
            <h3>Video: {data.video ? "Yes" : "No"}</h3>
            <h3>IMDB ID: {data.imdb_id}</h3>
            <h3>Vote Count: {data.vote_count}</h3>
            <h3>Production Companies: {data.production_companies.map((c) => c.name).join(', ')}</h3>
            <h3>Production Countries: {data.production_countries.map((c) => c.name).join(', ')}</h3>
            <h3>Spoken Languages: {data.spoken_languages.map((c) => c.name).join(', ')}</h3>
            <h3>Total Revenue: ${data.revenue.toLocaleString()}</h3>
            <h3>Total Budget: ${data.budget.toLocaleString()}</h3>
            <h3>In Cinemas: {data.in_production? "Yes" : "No"}</h3>
         
        </div>
    );
}
