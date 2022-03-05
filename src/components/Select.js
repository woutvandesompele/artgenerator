import PropTypes from "prop-types";

const Select = ({ onValueChange, value, label }) => {
  return (
    <label>
      <span className="input__label">{label}</span>
      <select className="select" value={value} onChange={(e) => onValueChange(e.target.value)}>
        <option>Bold</option>
        <option>Curious</option>
        <option>Soft</option>
        <option>Earth</option>
      </select>
    </label>
  );
};


Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
