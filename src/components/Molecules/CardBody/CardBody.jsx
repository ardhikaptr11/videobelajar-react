import PropTypes from "prop-types";
import CourseInfo from "../CourseInfo/CourseInfo";

const CardBody = ({ coverImage, courseInfo }) => {
	return (
		<div className="flex gap-3 min-[768px]:block">
			<img
				src={coverImage}
				alt="Course cover image"
				className="size-[82px] min-[768px]:w-full min-[768px]:h-[230px] min-[768px]:mb-4 rounded-[10px] shrink-0"
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
