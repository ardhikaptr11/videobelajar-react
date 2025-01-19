import PropTypes from "prop-types";
import "./input.css";
// import styles from "./Input.module.css";

const Input = ({ type, name, id, children, ...props }) => {
	return (id === "gender" || id === "countryCode") && children ? (
		<select name={name} className="selection" id={id} {...props}>
			{children}
		</select>
	) : (
		<input type={type} name={name} className="input" id={id} {...props} />
	);
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	children: PropTypes.node
};

export default Input;
