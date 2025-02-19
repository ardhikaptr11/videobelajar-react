import PropTypes from "prop-types";

const Course = ({ children }) => {
	return <section className="mt-6">{children}</section>;
};

Course.propTypes = {
	children: PropTypes.node.isRequired
};

export default Course;
