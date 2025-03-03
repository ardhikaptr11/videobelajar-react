import PropTypes from 'prop-types';
import ratingStars from "@assets/rating-stars.png";


const CourseRating = ({ rating, totalReviews }) => {
    return (
        <div className="flex justify-between items-center gap-2">
            <img src={ratingStars} alt="Rating star of the course" className="w-[90px] h-[18px]" />
            <p className="text-[0.75em] min-[768px]:text-[0.875em]"><u>{rating} ({totalReviews})</u></p>
        </div>
    )
}

CourseRating.propTypes = {
    rating: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired
}

export default CourseRating;