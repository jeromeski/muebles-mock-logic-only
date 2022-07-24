import { CgSearch } from "react-icons/cg";

const ComboboxInput = ({ handleChange, term }) => {
  return (
    <div className="combobox-input-container">
      <CgSearch className="search-icon" />
      <input
        type="text"
        value={term}
        onChange={handleChange}
        className="combobox-input"
      />
    </div>
  );
};

export default ComboboxInput;
