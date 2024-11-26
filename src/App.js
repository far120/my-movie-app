import { Route, Routes } from "react-router-dom";
import Nav from "./pages/nav/nav";
import AuthNav from "./pages/auth/auth-nav";
import Footer from "./pages/footer/footer";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Home from "./pages/category/home";
import Movies from "./pages/category/movies";
import Series from "./pages/category/series";
import Animes from "./pages/category/animes";
import Programming_tv from "./pages/category/programming_tv";
import Protect from "./pages/auth/protect";
import Movieid from "./pages/category/movieid";

function App() {
  return (
    <>
      <Nav />
      <Routes>
       
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route element={<Protect />}>
        <Route path="/" element={<Movies />} />
        <Route path="/:id" element={<Movieid />} />
          {/* <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movieid />} /> */}
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movieid />} />
          {/* <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<Movieid />} />
          <Route path="/programming_tv" element={<Programming_tv />} />
          <Route path="/programming_tv/:id" element={<Movieid />} />
          <Route path="/animes" element={<Animes />} />
          <Route path="/animes/:id" element={<Movieid />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
