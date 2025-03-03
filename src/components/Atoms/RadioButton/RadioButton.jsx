import PropTypes from "prop-types";

const RadioButton = ({ name, value, selectedValue, onChange }) => {
	return (
		<input
			className="appearance-none m-0 w-4 h-4 border border-[#3ecf4c] rounded-full transition-all duration-100 ease-in-out  cursor-pointer peer"
			type="radio"
			id={`${name}-${value}`}
			name={name}
			value={value}
			checked={value === selectedValue}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
};

RadioButton.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selectedValue: PropTypes.string,
	onChange: PropTypes.func.isRequired
};

export default RadioButton;
