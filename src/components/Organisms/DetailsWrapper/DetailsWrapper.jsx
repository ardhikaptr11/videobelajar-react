import PropTypes from "prop-types";

const DetailsWrapper = ({ children }) => {
	return (
		<section className="flex flex-col gap-y-6 mt-6 min-[992px]:flex-row min-[992px]:gap-x-9">
			{children}
		</section>
	);
};

DetailsWrapper.propTypes = {
	children: PropTypes.node.isRequired
};

export default DetailsWrapper;
