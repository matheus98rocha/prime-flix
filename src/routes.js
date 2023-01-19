import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componentes/Header/Header";
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
