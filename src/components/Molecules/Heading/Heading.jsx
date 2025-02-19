import PropTypes from "prop-types";

const Heading = ({ headingText, childText}) => {
	return (
		<div className="flex flex-col gap-y-2.5">
			<h3 className="leading-none text-black">{headingText}</h3>
			<p>{childText}</p>
		</div>
	);
};

Heading.propTypes = {
	headingText: PropTypes.string.isRequired,
	childText: PropTypes.string.isRequired
}

export default Heading;
