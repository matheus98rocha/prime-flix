import { BrowserRouter, Route, Routes } from "react-router-dom";

import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import { MovieByGender } from "../pages/MovieByGender/MovieByGender";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NotFound from "../pages/NotFound/NotFound";
import Auth from "../pages/Auth/Auth";
import LayoutRoute from "./LayoutRoute";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />

        <Route
          path="/movies"
          element={
            <LayoutRoute>
              <Home />
            </LayoutRoute>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <LayoutRoute>
              <MovieDetails />
            </LayoutRoute>
          }
        />

        <Route
          path="/my-movies"
          element={
            <LayoutRoute>
              <Favorites />
            </LayoutRoute>
          }
        />

        <Route
          path="/filter-movie/:gender"
          element={
            <LayoutRoute>
              <MovieByGender />
            </LayoutRoute>
          }
        />

        <Route
          path="*"
          element={
            <LayoutRoute>
              <NotFound />
            </LayoutRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
