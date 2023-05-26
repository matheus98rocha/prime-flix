import React, { Suspense } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Loading from "../componentes/Loading/Loading";
import { useAuthContext } from "../context/authContext";
import { useEffect } from "react";

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
  const navigate = useNavigate();
  const { userData } = useAuthContext();

  useEffect(() => {
    if (userData) {
      navigate("/movies", { replace: true });
    }
  }, [userData, navigate]);

  return (
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
  );
};

export default RoutesApp;
