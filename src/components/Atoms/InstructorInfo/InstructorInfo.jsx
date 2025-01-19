import PropTypes from "prop-types";
import styles from "./InstructorInfo.module.css";

const InstructorInfo = ({ name, job }) => {
	return (
		<div className="instructorInfo">
			<p className={styles.name}>{name}</p>
			<p className={styles.job}>{job}</p>
		</div>
	);
};

InstructorInfo.propTypes = {
	name: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired
};

export default InstructorInfo;
