const ComboboxOption = (props) => {
  return (
    <button type="button" className="combobox-option-container">
      <img className="popover-image" src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </button>
  );
};

export default ComboboxOption;
