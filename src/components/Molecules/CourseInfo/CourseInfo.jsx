import PropTypes from "prop-types";
import Instructor from "../Instructor/Instructor";

const CourseInfo = ({ title, description, instructor }) => {
	return (
		<div className="flex flex-col justify-between w-full">
			<h3 className="font-semibold text-base min-[768px]:text-[1.125em] min-[768px]:mb-2 text-[#222325] whitespace-break-spaces">
				{title}
			</h3>
			<p className="text-base hidden min-[768px]:block min-[768px]:mb-2">
				{description}
			</p>
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
