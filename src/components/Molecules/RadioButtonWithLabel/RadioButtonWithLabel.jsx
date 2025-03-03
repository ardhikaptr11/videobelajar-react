import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";

import RadioButton from "@components/Atoms/RadioButton/RadioButton";
import PropTypes from "prop-types";

const RadioButtonWithLabel = ({ ...props }) => {
	return (
		<div className="relative">
			<label htmlFor={`${props.name}-${props.value}`} className="flex gap-x-[15px] items-center cursor-pointer">
				<RadioButton {...props} />
				<FontAwesomeIcon icon={faCircleDot} style={{ color: "#3ecf4c" }} className="absolute opacity-0 peer-checked:opacity-100"/>
				{props.label}
			</label>
		</div>
	);
};

RadioButtonWithLabel.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	selectedValue: PropTypes.string,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired
};

export default RadioButtonWithLabel;
