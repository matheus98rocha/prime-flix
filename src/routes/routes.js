import { BrowserRouter, Route, Routes } from "react-router-dom";

import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import { MovieByGender } from "../pages/MovieByGender/MovieByGender";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NotFound from "../pages/NotFound/NotFound";
import AuthenticatedRoutes from "./LayoutRoute";
import Auth from "../pages/Auth/Auth";
import LayoutRoute from "./LayoutRoute";
import IsLoggedRoute from "./IsLoggedRoute";

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
          // component={() =>
          //   // <AuthenticatedRoutes>
          //   ({
          //     /* </AuthenticatedRoutes> */
          //   })
          // }
        />
        {/* 
        <IsLoggedRoute
          path="/movie/:id"
          component={() => (
            <AuthenticatedRoutes>
              <Route path="/" element={<MovieDetails />} />
            </AuthenticatedRoutes>
          )}
        />

        <IsLoggedRoute
          path="/my-movies"
          component={() => (
            <AuthenticatedRoutes>
              <Route path="/" element={<Favorites />} />
            </AuthenticatedRoutes>
          )}
        />

        <IsLoggedRoute
          path="/filter-movie/:gender"
          component={() => (
            <AuthenticatedRoutes>
              <Route path="/" element={<MovieByGender />} />
            </AuthenticatedRoutes>
          )}
        />

        <Route
          path="*"
          element={
            <AuthenticatedRoutes>
              <NotFound />
            </AuthenticatedRoutes>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
