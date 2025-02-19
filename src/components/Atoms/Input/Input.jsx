import PropTypes from "prop-types";

const Input = ({ type, name, id, children, ...props }) => {
	const setInputStyle = () => {
		let setOfClasses;

		id === "newsletter"
			? (setOfClasses =
					"border-none outline-none rounded-[10px] p-[10px_8px] bg-white text-[#333333] text-center placeholder:text-center min-[992px]:text-start min-[992px]:placeholder:text-start min-[992px]:placeholder:ml-2.5 newsletter-input-lg-screen")
			: (setOfClasses =
					"h-[36px] border-1 border-solid border-[#3a354166] rounded-[6px] text-base");

		id === "countryCode"
			? (setOfClasses = `${setOfClasses} rounded-s-none p-[4px_6px]`)
			: (setOfClasses = `${setOfClasses} p-[4px_10px]`);

		id === "countryCode" || id === "gender"
			? (setOfClasses = `${setOfClasses} bg-(image:--chevron-down) bg-no-repeat bg-[center_right_10px] cursor-pointer`)
			: setOfClasses;

		return setOfClasses;
	};

	return (id === "gender" || id === "countryCode") && children ? (
		<select name={name} className={`block w-full appearance-none ${setInputStyle()}`} id={id} {...props}>
			{children}
		</select>
	) : (
		<input
			type={type}
			name={name}
			className={`w-full block appearance-none ${setInputStyle()}`}
			id={id}
			{...props}
		/>
	);
};

Input.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	children: PropTypes.node
};

export default Input;
