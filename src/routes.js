import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactMenu from "./componentes/ContactMenu/ContactMenu";
import Header from "./componentes/Header/Header";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Movie from "./pages/Movie/Movie";
import NotFound from "./pages/NotFound/NotFound";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/favorites" element={<Favorites />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactMenu />
    </BrowserRouter>
  );
};

export default RoutesApp;
