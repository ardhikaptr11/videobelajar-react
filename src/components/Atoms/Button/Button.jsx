import PropTypes from "prop-types";

// TODO: Will be refactored in future work (I promise). This is confusing either for me.
const Button = ({ type, id, text, icon, ...props }) => {
	// Helper function to determine class based on button id for styling purposes
	// const setButtonClasses = () => {
	// 	let buttonClasses = "block outline-none cursor-pointer rounded-[10px] text-[1em] group";

	// 	// id === "login" | style === "outline" | grouped === false
	// 	id === "login" || id === "signup" || id === "purchase" || id === "share" || id === "update" || id === "edit"
	// 		? (buttonClasses = `${buttonClasses} ${id === "edit" ? "w-auto" : "w-full"} h-[36px] ${
	// 				!grouped && id !== "update" && id !== "edit" ? "mb-4" : "mb-0"
	// 		  }`)
	// 		: (buttonClasses = `${buttonClasses} ${
	// 				id === "explore"
	// 					? "w-full h-[42px] max-w-[369px]"
	// 					: id === "edit" || id === "delete"
	// 					? "w-fit"
	// 					: "h-[40px] inline-block btn-large-screen"
	// 		  }`);

	// 	id === "explore" || id === "subscribe"
	// 		? (buttonClasses = `${buttonClasses} p-[10px_5px] min-[576px]:p-[10px_8px]`)
	// 		: (buttonClasses = `${buttonClasses} p-[7px_22px] `);

	// 	style === "fill" &&
	// 	(id === "login" || id === "explore" || id === "purchase" || id === "update" || id === "edit")
	// 		? (buttonClasses = `${buttonClasses} bg-[#3ecf4c] hover:bg-[#36b343]`)
	// 		: (buttonClasses = `${buttonClasses} ${
	// 				id === "signup"
	// 					? "bg-[#e9fde2]"
	// 					: id === "subscribe"
	// 					? `bg-[#ffbd3a] ${id === "subscribe" && "hover:bg-[#e0a126]"}`
	// 					: "bg-[#ff6347]"
	// 		  }`);

	// 	style === "outline"
	// 		? (buttonClasses = `${buttonClasses} border-[1px] border-solid border-[#3ecf4c] bg-transparent hover:bg-[#e9fde2]`)
	// 		: (buttonClasses = `${buttonClasses} border-none`);

	// 	return buttonClasses;
	// };

	const { style, textStyle, onClick } = props;

	const buttonClasses = `block outline-none cursor-pointer rounded-[10px] text-[1em] group ${style}`;
	const textClasses = `w-fit relative m-[0_auto] font-button ${textStyle}`;
	// 	let paragraphClasses = "w-fit relative my-0 mx-auto font-button";

	// 	id === "login" ||
	// 	id === "signup" ||
	// 	id === "subscribe" ||
	// 	id === "purchase" ||
	// 	id === "share" ||
	// 	id === "update" ||
	// 	id === "delete" ||
	// 	id === "edit"
	// 		? (paragraphClasses = `${paragraphClasses} font-bold ${
	// 				id === "delete" ? "leading-[24px]" : "leading-none"
	// 		  }`)
	// 		: (paragraphClasses = `${paragraphClasses} font-normal text-[0.875em]`);

	// 	(id === "login" && style === "fill") ||
	// 	id === "explore" ||
	// 	id === "subscribe" ||
	// 	id === "purchase" ||
	// 	id === "update" ||
	// 	id === "edit" ||
	// 	id === "delete"
	// 		? (paragraphClasses = `${paragraphClasses} text-[#ffffff]`)
	// 		: (paragraphClasses = `${paragraphClasses} text-[#3ecf4c]`);

	// 	id === "explore" ? (paragraphClasses = `${paragraphClasses} max-[345px]:text-[0.75em]`) : paragraphClasses;

	// 	style === "outline" ? (paragraphClasses = `${paragraphClasses} group-hover:text-[#36b343]`) : paragraphClasses;

	// 	return paragraphClasses;
	// };

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
