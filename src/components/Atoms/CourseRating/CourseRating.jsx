import PropTypes from 'prop-types';
import styles from './CourseRating.module.css';
import ratingStars from "@assets/rating-stars.png";


const CourseRating = ({ rating, totalReviews }) => {
    return (
        <div className={styles.courseRating}>
            <img src={ratingStars} alt="Rating star of the course" className={styles.stars} />
            <p><u>{rating} ({totalReviews})</u></p>
        </div>
    )
}

CourseRating.propTypes = {
    rating: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired
}

export default CourseRating;