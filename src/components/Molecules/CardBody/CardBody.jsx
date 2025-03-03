import PropTypes from "prop-types";
import CourseInfo from "../CourseInfo/CourseInfo";

const CardBody = ({ coverImage, courseInfo }) => {
	const location = window.location.pathname;

	return (
		<div className={`flex gap-3 ${location === "/" ? "min-[768px]:block" : "min-[1400px]:block"}`}>
			<img
				src={coverImage}
				alt="Course cover image"
				// size-[82px] min-[768px]:w-full min-[768px]:h-[230px] min-[768px]:mb-4 rounded-[10px] shrink-0
				className={`size-[82px] rounded-[10px] shrink-0 ${
					location === "/"
						? "min-[768px]:w-full min-[768px]:h-[230px] min-[768px]:mb-4"
						: "min-[1400px]:mb-4 min-[1400px]:w-full min-[1400px]:h-[230px]"
				}`}
			/>
			<CourseInfo {...courseInfo} />
		</div>
	);
};

CardBody.propTypes = {
	coverImage: PropTypes.string.isRequired,
	courseInfo: PropTypes.object.isRequired
};

export default CardBody;
