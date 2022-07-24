import { CgSearch } from "react-icons/cg";

const ComboboxInput = ({ handleChange }) => {
  return (
    <div className="combobox-input-container">
      <CgSearch className="search-icon" />
      <input type="text" onChange={handleChange} className="combobox-input" />
    </div>
  );
};

export default ComboboxInput;
