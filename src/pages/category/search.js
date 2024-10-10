import { useParams } from "react-router-dom"

export default search(){
   const search = useParams();
   useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=694d311622a06aad1d581101a2a76d08&language=en-US&query=${search}`)
        .then((response) => response.json())
        .then((data) => {
            setmovie(data.results); 
        })
        .catch((error) => {
            console.error("Error fetching search results:", error);
        });
}, [search]);

if(!movie){
    return <h2>Loading...</h2>;  
}
    const showMovie = movie.map((mm, index) => (
     <div className="acard"  key={`${mm.id}-${index}`}>
            <Link to={`${mm.id}`} >
             <img 
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
           <h2 className="headmovie" >Top  Movies</h2>
           <div className="cardd">

              {showMovie}

          </div>
          <nav aria-label="Page navigation example" style={{display:"flex" , alignItems:"center" , justifyContent:"center"}}>
  <ul class="pagination" >
    { id > 20 ?(
    <li class="page-item"><button class="page-link"  onClick={()=>handelid(id-20)}>Previous</button></li>
    ):
    (
        <li class="page-item disabled"><button class="page-link" disabled>Previous</button></li>
    )}
    { id > 1 ?(
    <li class="page-item"><button class="page-link"  onClick={()=>handelid(id-1)} >{id-1}</button></li>
      ):
      (
        null
    )}
    <li class="page-item"><button class="page-link" style={{textDecoration:"underline"}}  onClick={()=>handelid(id)}>{id}</button></li>
    <li class="page-item"><button class="page-link"  onClick={()=>handelid(id+1)}>{id+1}</button></li>
    <li class="page-item"><button class="page-link"  onClick={()=>handelid(id+20)}>Next</button></li>
  </ul>
</nav>
          </div>
      );
}