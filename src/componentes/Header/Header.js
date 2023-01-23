import "./header.css";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        <BiCameraMovie /> Prime Flix
      </Link>

      <Link className="favorites" to="/favorites">
        Meus filmes
      </Link>
    </header>
  );
};

export default Header;
