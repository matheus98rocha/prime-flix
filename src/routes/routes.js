import { BrowserRouter, Route, Routes } from "react-router-dom";

import Favorites from "../pages/Favorites/Favorites";
import Home from "../pages/Home/Home";
import { MovieByGender } from "../pages/MovieByGender/MovieByGender";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NotFound from "../pages/NotFound/NotFound";
import AuthenticatedRoutes from "./AuthenticatedRoutes";
import Auth from "../pages/Auth/Auth";
import PrivateRoute from "./PrivateRoutes";
import IsLoggedRoute from "./IsLoggedRoute";

const RoutesApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IsLoggedRoute path="/" component={Auth} />} />
        <Route
          path="/movies"
          element={
            <AuthenticatedRoutes>
              <PrivateRoute path="/" component={Home} />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/movie/:id"
          element={
            <AuthenticatedRoutes>
              <PrivateRoute path="/" component={MovieDetails} />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/my-movies"
          element={
            <AuthenticatedRoutes>
              <PrivateRoute path="/" component={Favorites} />
            </AuthenticatedRoutes>
          }
        />
        <Route
          path="/filter-movie/:gender"
          element={
            <AuthenticatedRoutes>
              <PrivateRoute path="/" component={MovieByGender} />
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
