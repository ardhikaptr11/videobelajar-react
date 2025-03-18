import { useNavigate } from "react-router";

import CardBody from "../CardBody/CardBody";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";

const CourseCard = ({ course, ...props }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		const slug = course.courseInfo.slug
		navigate(`/course/${slug}`);
	};

	const setClasses = () => {
		let setOfClasses =
			"w-full flex flex-col justify-center gap-2 border-1 border-solid border-[#e1dfdf] rounded-[10px] p-4 h-auto cursor-pointer shadow-lg transition-all duration-700 hover:scale-95";

		if (props.location === "/") {
			setOfClasses = `${setOfClasses} card-sm-screen-main card-md-screen-main card-lg-screen-main`;
		} else if (props.location === "/categories") {
			setOfClasses = `${setOfClasses} card-sm-screen-categories card-md-screen-categories card-xl-screen-categories`;
		} else {
			setOfClasses = `${setOfClasses} card-sm-screen-details card-md-screen-details card-lg-screen-details`;
		}

		return setOfClasses;
	};

	return (
		<div className={setClasses()} onClick={handleClick}>
			<CardBody {...course} />
			<CardFooter {...course} {...props} />
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object.isRequired,
	location: PropTypes.string.isRequired
};

export default CourseCard;
