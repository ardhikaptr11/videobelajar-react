import CourseRating from "@components/Atoms/CourseRating/CourseRating";
import PropTypes from "prop-types";
import styles from "./CardFooter.module.css";

const CardFooter = ({ rating, totalReviews, price }) => {
	return (
		<div className={styles.cardFooter}>
			<CourseRating rating={rating} totalReviews={totalReviews} />
			<h3 className={styles.pricing}>Rp {price}K</h3>
		</div>
	);
};

CardFooter.propTypes = {
    rating: PropTypes.number.isRequired,
    totalReviews: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}

export default CardFooter;