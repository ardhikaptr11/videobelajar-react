import PropTypes from "prop-types";
import Instructor from "@components/Molecules/Instructor/Instructor";

const CourseInfo = ({ title, description, instructors }) => {
	const location = window.location.pathname;

	return (
		<div className="flex flex-col justify-between w-full">
			<h3
				className={`font-semibold text-base text-[#222325] whitespace-break-spaces ${
					location === "/"
						? "max-[576px]:line-clamp-1 min-[768px]:text-[1.125em] min-[768px]:mb-2"
						: "max-[1360px]:line-clamp-1 min-[1400px]:text-[1.125em]"
				} text-ellipsis`}>
				{title}
			</h3>
			<p
				className={`text-base hidden ${
					location === "/"
						? "min-[768px]:mb-2 min-[768px]:line-clamp-2"
						: "min-[1400px]:mb-2 min-[1400px]:line-clamp-2"
				} text-ellipsis`}>
				{description}
			</p>
			<Instructor instructors={instructors} />
		</div>
	);
};

CourseInfo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	instructors: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CourseInfo;
