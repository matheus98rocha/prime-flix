import "./searchInput.css";
const SearchInput = ({ handleChange, placeholder }) => {
  return (
    <input
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
