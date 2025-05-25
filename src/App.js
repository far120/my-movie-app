import { Route, Routes } from "react-router-dom";
import Nav from "./pages/nav/nav";
import Footer from "./pages/footer/footer";
import Movies from "./pages/category/movies";
import Movieid from "./pages/category/movieid";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-cyan-900 via-gray-900 to-gray-800 text-white font-sans animate-gradient-x">
      <Nav />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="bg-white/10 rounded-2xl shadow-2xl p-0 md:p-0 backdrop-blur-md animate-fade-in">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/:id" element={<Movieid />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
