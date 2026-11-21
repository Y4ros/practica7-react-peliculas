import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import MovieDetails from "../pages/MovieDetails";

function AppRouter() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="title">
          🎬 Películas
        </Link>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default AppRouter;
