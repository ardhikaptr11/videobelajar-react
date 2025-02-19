import CardBody from "../CardBody/CardBody";
import CardFooter from "../CardFooter/CardFooter";
import PropTypes from "prop-types";


const CourseCard = ({ course }) => {
	return (
		<div className="flex flex-col justify-center gap-2 border-1 border-solid border-[#e1dfdf] rounded-[10px] p-4 h-auto min-[768px]:first:mt-0 cursor-pointer shadow-lg transition-all duration-700 hover:scale-95 card-sm-screen card-md-screen card-lg-screen card-xl-screen">
			<CardBody {...course} />
			<CardFooter {...course} />
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object.isRequired
};

export default CourseCard;
