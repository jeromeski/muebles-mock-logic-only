import { useNavigate } from "react-router-dom";

const ComboboxOption = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.clearSearch("");
    navigate(`/furniture/${props.slug}`);
  };
  return (
    <button
      type="button"
      className="combobox-option-container"
      onClick={handleClick}
    >
      <img className="popover-image" src={props.image} alt={props.title} />
      <span>{props.title}</span>
    </button>
  );
};

export default ComboboxOption;
