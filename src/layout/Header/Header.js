import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import NavItem from "./NavItem/NavItem";
import { LinksWrapper, Logo, Wrapper } from "./header.styles";

const Header = ({ userName }) => {
  const [scrollPage, setScrollPage] = useState(false);
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

  const handleScrollY = () => {
    if (window.scrollY >= 80) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };

  window.addEventListener("scroll", handleScrollY);

  return (
    <Wrapper active={scrollPage}>
      <div className="left-content">
        <LinksWrapper>
          {navItems.map((e, index) => (
            <NavItem route={e.route} label={e.label} key={index} />
          ))}
        </LinksWrapper>
      </div>
      <Logo to="/movies">
        <BiCameraMovie /> Prime Flix
      </Logo>
      <p>{userName}</p>
    </Wrapper>
  );
};

export default Header;
