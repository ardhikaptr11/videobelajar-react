import PropTypes from "prop-types";

const Course = ({ page = "landing", children }) => {
	return (
		<section
			className={`w-full max-[992px]:w-max-[790px] ${page !== "landing" ? "mt-0" : "mt-6"} ${
				page === "categories" ? "flex flex-col gap-y-5.5" : "block"
			}`}
			id="courses">
			{children}
		</section>
	);
};

Course.propTypes = {
	children: PropTypes.node.isRequired,
	page: PropTypes.string
};

export default Course;
