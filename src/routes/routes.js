import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../componentes/Loading/Loading";

const Favorites = React.lazy(() => import("../pages/Favorites/Favorites"));
const Home = React.lazy(() => import("../pages/Home/Home"));
const MovieByGender = React.lazy(() =>
  import("../pages/MovieByGender/MovieByGender")
);
const MovieDetails = React.lazy(() =>
  import("../pages/MovieDetails/MovieDetails")
);
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));
const Auth = React.lazy(() => import("../pages/Auth/Auth"));
const LayoutRoute = React.lazy(() => import("./LayoutRoute"));

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Auth />
            </Suspense>
          }
        />

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
