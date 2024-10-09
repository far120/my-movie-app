import { useEffect, useState } from "react";

import "./cardd.css";
import { Link } from "react-router-dom";

export default function Programming_tv() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        const allMovies = [];
        for (let i = 41; i <= 60; i++) {
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&page=${i}`)
                .then((response) => response.json())
                .then((data) => {
                    allMovies.push(...data.results);
                   if (i === 60) { // Only update state after the last page has been fetched
                        setmovie(allMovies);
                    }
                   
                      
                   
                })
                .catch((error) => {
                    console.error("Error fetching movies:", error);
                });
        }
        
    }, []);
    
    console.log(movie);
   


    
    const showMovie = movie.map((mm, index) => (
     <div className="acard"  key={`${mm.id}-${index}`}>
            <Link to={`${mm.id}`} > <img 
                 src={`https://image.tmdb.org/t/p/w500/${mm.poster_path}`} 
                 alt={mm.title} 
                 width="280" 
                 height="280" 
             /> 
             </Link>
     </div>
 ));
 
      
      return (
          <div className="cc">
           <h2 className="headmovie" >Top  Programming_tv</h2>
           <div className="cardd">

              {showMovie}

          </div>
          </div>
      );
}
