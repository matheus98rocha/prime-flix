import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { MovieByGender } from "./pages/MovieByGender/MovieByGender";
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
        <Route path="/filter-movie/:gender" element={<MovieByGender />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(RoutesApp);
