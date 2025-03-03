import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Checkbox from "@components/Atoms/Checkbox/Checkbox";

const CheckboxWithLabel = ({ ...props }) => (
	<div className="relative">
		<label htmlFor={props.name} className="flex gap-x-[15px] items-center cursor-pointer">
			<Checkbox {...props} />
			<FontAwesomeIcon
				icon={faCheck}
				className={`absolute w-4.5 h-4.5 text-[#3ecf4c] opacity-0 ${props.name} transition`}
			/>
			{props.label}
		</label>
	</div>
);

CheckboxWithLabel.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default CheckboxWithLabel;
