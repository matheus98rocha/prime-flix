// import { Link } from "react-router-dom";
import { Wrapper } from "./dropdown.styles";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { genderMovies } from "../../mock/gender";

const Dropdown = () => {
  return (
    <Wrapper>
      <p>
        Gêneros
        <IoMdArrowDropdown />
      </p>
      <div className="menu" style={{ backgroundColor: "white" }}>
        {genderMovies.map((gender) => {
          return (
            <Link to={`/filter-movie/${gender.id}/${gender.movieGender}`} key={gender.id}>{gender.movieGender}</Link>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Dropdown;
