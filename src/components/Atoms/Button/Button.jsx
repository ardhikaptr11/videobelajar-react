import PropTypes from "prop-types";

const Button = ({ type, id, text, icon, ...props }) => {
	// Helper function to determine class based on button id for styling purposes
	const setButtonClasses = () => {
		let buttonClasses = "block border-none outline-none cursor-pointer rounded-[10px] text-[1em]";

		id === "login" || id === "signup"
			? (buttonClasses = `${buttonClasses} w-full h-[36px] mb-4`)
			: (buttonClasses = `${buttonClasses} ${
					id === "explore" ? "w-full h-[42px] max-w-[369px]" : "h-[40px] inline-block btn-large-screen"
			}`);

		id === "explore" || id === "subscribe"
			? (buttonClasses = `${buttonClasses} py-[10px] px-[8px]`)
			: (buttonClasses = `${buttonClasses} py-[7px] px-[22px] `);

		id === "login" || id === "explore"
			? (buttonClasses = `${buttonClasses} bg-[#3ecf4c]`)
			: (buttonClasses = `${buttonClasses} ${id === "signup" ? "bg-[#e9fde2]" : "bg-[#ffbd3a]"}`);

		return buttonClasses;
	};

	const setParagraphClasses = () => {
		let paragraphClasses = "w-fit relative my-0 mx-auto font-[Arial]";

		id === "login" || id === "signup" || id === "subscribe"
			? (paragraphClasses = `${paragraphClasses} font-bold leading-none`)
			: (paragraphClasses = `${paragraphClasses} font-normal text-[0.875em]`);

		id === "login" || id === "explore" || id === "subscribe"
			? (paragraphClasses = `${paragraphClasses} text-[#ffffff]`)
			: (paragraphClasses = `${paragraphClasses} text-[#3ecf4c]`);

		return paragraphClasses;
	};

	return icon ? (
		<button
			type={type}
			id={id}
			className="w-full border-none outline-none cursor-pointer rounded-[10px] text-[1em] flex justify-center items-center bg-transparent"
			{...props}>
			<img src={icon} alt="Google logo" />
			<p className="ml-2 text-[#4a505c] font-bold font-[Arial]">{text}</p>
		</button>
	) : (
		<button type={type} id={id} className={setButtonClasses()} {...props}>
			<p className={setParagraphClasses()}>{text}</p>
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
