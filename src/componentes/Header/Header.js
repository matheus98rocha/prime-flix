// import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import NavItem from "../NavItem/NavItem";
import { LinksWrapper, Logo, Wrapper } from "./header.styles";

const Header = ({ userName }) => {
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
    <Wrapper>
      <div className="left-content">
        <Logo to="/">
          <BiCameraMovie /> Prime Flix
        </Logo>
      </div>
      <LinksWrapper>
        {navItems.map((e, index) => (
          <NavItem route={e.route} label={e.label} key={index} />
        ))}
      </LinksWrapper>
      <p>{userName}</p>
    </Wrapper>
  );
};

export default Header;
