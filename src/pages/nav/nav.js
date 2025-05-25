import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <header className="backdrop-blur-md bg-gradient-to-r from-cyan-900/80 via-gray-900/80 to-cyan-800/80 shadow-xl sticky top-0 z-50 border-b border-cyan-900/30">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-cyan-400 drop-shadow-lg hover:text-cyan-300 transition-all duration-200">🎬 MovieApp</Link>
          <nav className="hidden md:flex gap-6 text-lg">
          </nav>
        </div>
        <form className="flex items-center bg-white/10 border border-cyan-900/30 rounded-lg px-3 py-1 shadow-inner focus-within:ring-2 focus-within:ring-cyan-400 transition-all">
          <input className="bg-transparent outline-none text-white placeholder-gray-300 px-2 py-1 w-32 md:w-48" type="search" name="search" placeholder="Search..." aria-label="Search" />
          <button className="text-cyan-400 hover:text-cyan-300 transition px-2" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
        </form>
      </div>
    </header>
  );
}