import PropTypes from "prop-types";

const InstructorInfo = ({ name, job, company }) => {
	const location = window.location.pathname;

	return (
		<div>
			<p className="text-[0.875em]/[19.6px] min-[768px]:text-base font-medium text-black tracking-[0.0125em]">
				{name}
			</p>
			<p
				className={`text-[0.75em]/[16.8px] ${
					location === "/"
						? "max-[576px]:line-clamp-1 min-[768px]:text-[0.875em]"
						: "max-[1360px]:line-clamp-1 min-[768px]:text-[0.875em]"
				} text-ellipsis tracking-[0.0125em]`}>
				{job} di <b>{company}</b>
			</p>
		</div>
	);
};

InstructorInfo.propTypes = {
	name: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired,
	company: PropTypes.string.isRequired
};

export default InstructorInfo;
