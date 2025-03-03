import PropTypes from "prop-types";

const Checkbox = ({ name, value, checked, onChange }) => (
	<input
		type="checkbox"
		id={name}
		name={name}
		value={value}
		checked={checked}
		onChange={onChange}
		className={`cursor-pointer appearance-none w-4.5 h-4.5 rounded-[4px] border border-solid border-[#3ecf4c] bg-[#e2fcd9cc]`}
	/>
);

Checkbox.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Checkbox;
