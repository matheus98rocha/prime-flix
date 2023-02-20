import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header/Header";
import { AllMovies } from "./pages/AllMovies/AllMovies";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import NotFound from "./pages/NotFound/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-movies" element={<Favorites />} />
        <Route path="/all-movies" element={<AllMovies />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
