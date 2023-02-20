// import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import NavItem from "../NavItem/NavItem";
import { LinksWrapper, Logo, Wrapper } from "./header.styles";

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
    <Wrapper>
      <Logo to="/">
        <BiCameraMovie /> Prime Flix
      </Logo>
      <LinksWrapper>
        {navItems.map((e) => (
          <NavItem route={e.route} label={e.label} />
        ))}
      </LinksWrapper>
    </Wrapper>
  );
};

export default Header;
