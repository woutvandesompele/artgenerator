import PropTypes from "prop-types";

const Slider = ({ onValueChange, value, max, min, label }) => {
  return (
    <label>
      <span>{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
      />
      <span>{value}</span>
    </label>
  );
};

Slider.defaultProps = {
  min: 6,
  max: 22
}

Slider.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Slider;
