import ComboboxPopover from "./combobox-popover";
import ComboboxList from "./combobox-list";
import ComboboxInput from "./combobox-input";
import ComboboxOption from "./combobox-option";
import "./combo-box-style.css";

const Combobox = ({ children }) => {
  return <div className="combobox">{children}</div>;
};

export {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption,
  ComboboxList
};
