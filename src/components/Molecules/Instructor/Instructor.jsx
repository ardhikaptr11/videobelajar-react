import InstructorInfo from "@components/Atoms/InstructorInfo/InstructorInfo";
import PropTypes from "prop-types";
import styles from "./Instructor.module.css";

const Instructor = ({ avatar, name, job }) => {
	return (
		<div className={styles.instructor}>
			<img src={avatar} alt={name} className={styles.avatar} />
			<InstructorInfo name={name} job={job} />
		</div>
	);
};

Instructor.propTypes = {
	avatar: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired
};

export default Instructor;
