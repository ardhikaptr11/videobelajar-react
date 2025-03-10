import CourseRating from "@components/Atoms/CourseRating/CourseRating";
import PropTypes from "prop-types";

const CardFooter = ({ courseInfo, ...props }) => {
	const { rating, totalReviews, price, isDiscount, discountedPrice } = courseInfo;

	return (
		<div className="flex justify-between items-center">
			<CourseRating rating={rating} totalReviews={totalReviews} />
			{isDiscount ? (
				<div className="flex flex-col items-start gap-x-2 min-[355px]:flex-row min-[355px]:items-center">
					<p
						className={`text-[#F64920] text-[0.875em]/[19.6px] font-normal font-price line-through tracking-[0.0125em] ${
							props.location === "/"
								? "min-[1200px]:text-[0.75em]/[19.6px]"
								: "min-[1250px]:text-[0.75em]/[19.6px] min-[1400px]:text-[0.875em]/[19.6px]"
						}`}>
						Rp {price}K
					</p>
					<h3 className="font-semibold text-[1.25em]/[24px] text-[#3ecf4c] font-price">
						Rp {discountedPrice}K
					</h3>
				</div>
			) : (
				<h3 className="font-semibold text-[1.25em]/[24px] text-[#3ecf4c] font-price">Rp {price}K</h3>
			)}
		</div>
	);
};

CardFooter.propTypes = {
	courseInfo: PropTypes.object.isRequired,
	location: PropTypes.string.isRequired
};

export default CardFooter;
