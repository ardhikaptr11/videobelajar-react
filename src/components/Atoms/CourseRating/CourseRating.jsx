import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

const CourseRating = ({ rating, totalReviews }) => {
	return (
		<div className="flex justify-between items-center gap-2">
			<Rating
				initialValue={rating}
				allowFraction={true}
				readonly={true}
				style={{ height: "30px" }}
				size={18}
				fillColor="#FCE91B"
			/>
			<p className="text-[0.75em] min-[768px]:text-[0.875em]">
				<u>
					{rating} ({totalReviews})
				</u>
			</p>
		</div>
	);
};

CourseRating.propTypes = {
	rating: PropTypes.number.isRequired,
	totalReviews: PropTypes.number.isRequired
};

export default CourseRating;
