import PropTypes from "prop-types";

const Colorpicker = ({ onValueChange, value, label }) => {
  return (
    <label>
      <span className="input__label">{label}</span> 
      <input
        className="colorpicker"
        type="color"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </label>
  );
};


Colorpicker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default Colorpicker;
