const ComboboxOption = ({ image, title }) => {
  return (
    <div className="popover-image-container">
      <img className="popover-image" src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default ComboboxOption;
