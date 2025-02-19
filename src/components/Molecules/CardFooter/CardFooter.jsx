import CourseRating from "@components/Atoms/CourseRating/CourseRating";
import PropTypes from "prop-types";

const CardFooter = ({ rating, totalReviews, price }) => {
	return (
		<div className="flex justify-between items-center">
			<CourseRating rating={rating} totalReviews={totalReviews} />
			<h3 className="font-semibold text-[1.25em]/[24px] text-[#3ecf4c] font-price">Rp {price}K</h3>
		</div>
	);
};

CardFooter.propTypes = {
	rating: PropTypes.number.isRequired,
	totalReviews: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired
};

export default CardFooter;
