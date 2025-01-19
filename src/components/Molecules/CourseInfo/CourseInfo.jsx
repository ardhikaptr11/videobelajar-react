import PropTypes from "prop-types";
import styles from "./CourseInfo.module.css";
import Instructor from "../Instructor/Instructor";


const CourseInfo = ({ title, description, instructor }) => {
	return (
		<div className={styles.courseInfo}>
			<h3 className={styles.courseTitle}>{title}</h3>
			<p className={styles.courseDescription}>{description}</p>
			<Instructor {...instructor} />
		</div>
	);
};

CourseInfo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	instructor: PropTypes.object.isRequired
};

export default CourseInfo;
