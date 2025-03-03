import PropTypes from "prop-types";

const AuthBox = ({ title, subtitle, children, action }) => {
	// Helper function to determine class based on form action type for layouting purposes
	const setClasses = () => {
		let setOfClasses = "flex relative flex-col p-5 w-[590px]";
		return action === "register" ? `${setOfClasses} mt-[70px] mb-[24px] mx-auto` : `${setOfClasses} m-auto`;
	};

	return (
		<section className={setClasses()}>
			<div className="text-center mb-5">
				<h2 className="text-[2em] max-[576px]:text-[1.5em] text-black font-bold">{title}</h2>
				<p className="text-[1em] max-[576px]:text-[0.875em] text-[#333]">{subtitle}</p>
			</div>
			{children}
		</section>
	);
};

AuthBox.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	action: PropTypes.string
};

export default AuthBox;
