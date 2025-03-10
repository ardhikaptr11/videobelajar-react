import PropTypes from "prop-types";
import CourseInfo from "../CourseInfo/CourseInfo";

const CardBody = ({ coverImage, courseInfo, instructors }) => {
	const location = window.location.pathname;

	return (
		<div className={`flex gap-3 ${location === "/" ? "min-[768px]:block" : "min-[1400px]:block"}`}>
			<img
				src={coverImage}
				alt="Course cover image"
				className={`size-[82px] rounded-[10px] shrink-0 ${
					location === "/"
						? "min-[768px]:w-full min-[768px]:h-[230px] min-[768px]:mb-4"
						: "min-[1400px]:mb-4 min-[1400px]:w-full min-[1400px]:h-[230px]"
				}`}
			/>
			<CourseInfo {...courseInfo} instructors={instructors}/>
		</div>
	);
};

CardBody.propTypes = {
	coverImage: PropTypes.string.isRequired,
	courseInfo: PropTypes.object.isRequired,
	instructors: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CardBody;
