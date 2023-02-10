import "./header.css";
import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import NavItem from "../NavItem/NavItem";

const Header = () => {
  const navItems = [
    {
      route: "my-movies",
      label: "Meus Filmes",
    },
    {
      route: "all-movies",
      label: "Filmes",
    },
  ];

  return (
    <header>
      <Link className="logo" to="/">
        <BiCameraMovie /> Prime Flix
      </Link>
      <div className="links-container">
        {navItems.map((e) => (
          <NavItem route={e.route} label={e.label} />
        ))}
      </div>
    </header>
  );
};

export default Header;
