import PropTypes from "prop-types";


const Button = ({ type, id, text, icon, ...props }) => {
	const { style, textStyle, onClick } = props;

	const buttonClasses = `block outline-none cursor-pointer rounded-[10px] text-[1em] group ${style}`;
	const textClasses = `w-fit relative m-[0_auto] font-button ${textStyle}`;
	
	return icon ? (
		<button type={type} id={id} className={style}>
			<img src={icon} alt="Google logo" />
			<p className={textStyle}>{text}</p>
		</button>
	) : (
		<button type={type} id={id} className={buttonClasses} onClick={onClick}>
			<p className={textClasses}>{text}</p>
		</button>
	);
};

Button.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	textStyle: PropTypes.string.isRequired,
	icon: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;
