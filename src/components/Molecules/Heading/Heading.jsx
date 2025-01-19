import styles from "./Heading.module.css";
import PropTypes from "prop-types";

const Heading = ({ headingText, childText}) => {
	return (
		<div className={styles.courseHeading}>
			<h3>{headingText}</h3>
			<p>{childText}</p>
		</div>
	);
};

Heading.propTypes = {
	headingText: PropTypes.string.isRequired,
	childText: PropTypes.string.isRequired
}

export default Heading;
