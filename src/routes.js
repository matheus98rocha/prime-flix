import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./layout/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import { MovieByGender } from "./pages/MovieByGender/MovieByGender";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import PrivateRoute from "./privateRoute";

const LoggedContainer = () => {
  return (
    <>
      <Header userName={"userName"} />
      <Routes>
        <Route path="/movies" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/my-movies" element={<Favorites />} />
        <Route
          path="/filter-movie/:id/:movieGender"
          element={<MovieByGender />}
        />
      </Routes>
    </>
  );
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Login />} />

        <Route
          path="/movies"
          element={
            <PrivateRoute>
              <Header userName={"userName"} />
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <PrivateRoute>
              <Header userName={"userName"} />
              <MovieDetails />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-movies"
          element={
            <PrivateRoute>
              <Header userName={"userName"} />
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route
          path="/filter-movie/:id/:movieGender"
          element={
            <PrivateRoute>
              <Header userName={"userName"} />
              <MovieByGender />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(RoutesApp);
