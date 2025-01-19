import PropTypes from "prop-types";
import style from "./Button.module.css";

const defineStyle = (id) => {
	if (id === "login" || id === "signup") {
		return id === "login" ? style.login : style.signup;
	} else if (id === "explore") {
		return style.explore;
	} else if (id === "subscribe") {
		return style.subscribe;
	}
}

const Button = ({ type, id, text, icon, ...props }) => {
	return icon ? (
		<button type={type} id={id} className={`${style.button} ${style.sso}`} {...props}>
			<img src={icon} alt="Google logo" />
			<p>{text}</p>
		</button>
	) : (
		<button
			type={type}
			id={id}
			className={`${style.button} ${defineStyle(id)}`}
			{...props}>
			<p>{text}</p>
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.string
	// action: PropTypes.string
};

export default Button;
