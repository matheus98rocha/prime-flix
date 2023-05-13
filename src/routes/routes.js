import { BrowserRouter, Route, Routes } from "react-router-dom";

import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import { MovieByGender } from "../pages/MovieByGender/MovieByGender";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NotFound from "../pages/NotFound/NotFound";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import Auth from "../pages/Auth/Auth";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route
          path="/movies"
          element={
            <AuthenticatedRoutes>
              <Home />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <AuthenticatedRoutes>
              <MovieDetails />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/my-movies"
          element={
            <AuthenticatedRoutes>
              <Favorites />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/filter-movie/:gender"
          element={
            <AuthenticatedRoutes>
              <MovieByGender />
            </AuthenticatedRoutes>
          }
        />

        <Route
          path="*"
          element={
            <AuthenticatedRoutes>
              <NotFound />
            </AuthenticatedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
