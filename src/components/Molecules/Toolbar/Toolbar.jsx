import PropTypes from "prop-types";

const Toolbar = ({ children }) => {
	return (
		<div className="flex flex-col gap-y-1.5 min-[576px]:flex-row min-[576px]:justify-between min-[768px]:gap-x-2 min-[768px]:justify-end">
			{children}
		</div>
	);
};

Toolbar.propTypes = {
	children: PropTypes.node.isRequired
};

export default Toolbar;
