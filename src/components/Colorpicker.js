import PropTypes from "prop-types";

const Colorpicker = ({ onValueChange, value, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="color"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
      <span>{value}</span>
    </label>
  );
};


Colorpicker.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Colorpicker;
