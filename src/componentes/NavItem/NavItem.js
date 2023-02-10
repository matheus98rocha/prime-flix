import { NavLink } from "react-router-dom";
import "./navItem.css";

const NavItem = ({ label, route }) => {
  return (
    <NavLink
      to={`/${route}`}
      className={({ isActive }) => (isActive ? "link-active" : "link")}
    >
      <hr className="line-link" />
      {label}
    </NavLink>
  );
};

export default NavItem;
