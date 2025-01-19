import styles from "./Course.module.css";
import PropTypes from "prop-types";

const Course = ({ children }) => {
	return <section className={styles.course}>{children}</section>;
};

Course.propTypes = {
	children: PropTypes.node.isRequired
};

export default Course;
