import PropTypes from "prop-types";

const InstructorInfo = ({ name, job }) => {
	return (
		<div className="instructorInfo">
			<p className="text-[0.875em]/[19.6px] min-[768px]:text-base font-medium text-black tracking-[0.0125em]">
				{name}
			</p>
			<p className="text-[0.75em]/[16.8px] min-[768px]:text-[0.875em] tracking-[0.0125em]">{job}</p>
		</div>
	);
};

InstructorInfo.propTypes = {
	name: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired
};

export default InstructorInfo;
