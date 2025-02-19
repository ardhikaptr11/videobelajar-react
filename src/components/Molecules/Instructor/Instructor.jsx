import InstructorInfo from "@components/Atoms/InstructorInfo/InstructorInfo";
import PropTypes from "prop-types";

const Instructor = ({ avatar, name, job }) => {
	return (
		<div className="flex items-center gap-2">
			<img src={avatar} alt={name} className="size-[36px] rounded-[10px]" />
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
