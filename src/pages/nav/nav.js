import { Link } from "react-router-dom";
import "./nav.css";
import AuthNav from "../auth/auth-nav";

export default function nav(){

    return(           
      <>

        
    <div className="d-grid">
    <div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
   <AuthNav/>

  </div>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
  </div>
  {/* //////////////////////// */}
  

        <nav className="navbar navbar-dark bg-dark">   
        <div className="container-fluid ">
            <div className="d-flex ">
            <Link  to="/" className="navbar-brand nav-hover">Home</Link>
            <Link  to="/movies" className="navbar-brand nav-hover">Movies</Link>
            <Link  to="/series" className="navbar-brand nav-hover">Series</Link>
            <Link  to="/programming_tv" className="navbar-brand nav-hover">Programming_TV</Link>
            <Link  to="/animes" className="navbar-brand nav-hover">Animes</Link>
          </div>
          <form className="d-flex">
            <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </nav>
      </>
    )
}