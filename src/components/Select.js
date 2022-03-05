import PropTypes from "prop-types";

const Select = ({ onValueChange, value, label }) => {
  return (
    <label>
      <span>{label}</span>
      <select value={value} onChange={(e) => onValueChange(e.target.value)}>
        <option>Blue</option>
        <option>Orange</option>
        <option>Purple</option>
        <option>Red</option>
      </select>
      <span>{value}</span>
    </label>
  );
};


Select.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Select;
