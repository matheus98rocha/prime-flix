import { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import NavItem from "./components/NavItem/NavItem";
import { LinksWrapper, Logo, Wrapper } from "./header.styles";
import { useAuthContext } from "../../context/authContext";
import { BiUserCircle } from "react-icons/bi";

const Header = () => {
  const [scrollPage, setScrollPage] = useState(false);
  const { userData } = useAuthContext();

  const navItems = [
    {
      route: "my-movies",
      label: "Meus Filmes",
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
  console.log(userData)

  return (
    <Wrapper active={scrollPage}>
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
      
    </Wrapper>
  );
};

export default Header;
