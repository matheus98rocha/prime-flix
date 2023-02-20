import { SearchInputWrapper } from "./searchInput.styles";

const SearchInput = ({ handleChange, placeholder }) => {
  return (
    <SearchInputWrapper
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
