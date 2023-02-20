import { NavLink } from "react-router-dom";

import { NavItemWrapper } from "./navItem.styles";

const NavItem = ({ label, route }) => {
  return (
    <NavItemWrapper>
      <NavLink
        to={`/${route}`}
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        <hr className="line-link" />
        {label}
      </NavLink>
    </NavItemWrapper>
  );
};

export default NavItem;
