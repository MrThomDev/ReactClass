import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    ></input>
  );
};

export default SearchBox;
