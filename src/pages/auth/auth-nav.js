import { Link, useNavigate } from "react-router-dom";
import "./authnav.css";

export default function Nav() {
  const navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("sign");
  
  }
  return (
    <nav className="navbar navbar-dark bg-dark nav">
      <div className="auth-nav">
        <form className="d-flex gap-3">
          {!window.localStorage.getItem("sign") ? (
            <>
              <Link className="navbar-brand nav-hover" to="/signup">
                <button className="btn btn-outline-primary p-3" type="button">Signup</button>
              </Link>
              <Link className="navbar-brand nav-hover" to="/login">
                <button className="btn btn-outline-primary p-3" type="button">Login</button>
              </Link>
            </>
          ) : (
            <Link className="navbar-brand nav-hover" onClick={logout} to="/login">
              <button className="btn btn-outline-primary p-3" type="button">Logout</button>
            </Link>
          )}
        </form>
        <div>
          <h1 style={{ color: "white" }}>Welcome to Elfar Movie App</h1>
        </div>
      </div>
    </nav>
  );
}
