import SubscriptionField from "../SubscriptionField/SubscriptionField";
import PropTypes from "prop-types";

const Newsletter = ({ headingText, childText }) => {
	return (
		<section className="flex flex-col justify-center items-center h-[400px] p-[37px_20px] mt-6 text-center text-white rounded-[4px] bg-center bg-cover bg-no-repeat bg-(image:--newsletter-bg) min-[768px]:mt-[64px] min-[992px]:p-[46px_175px]">
			<h3 className="uppercase font-medium text-base/[22.4px] tracking-[0.0125em] mb-1 min-[992px]:text-[1.25em]/[25.2px]">
				Newsletter
			</h3>
			<h3 className="text-[1.5em]/[26.4px] font-semibold mb-2.5 min-[992px]:text-[2em]/[35.2px]">
				{headingText}
			</h3>
			<p className="text-[0.875em]/[19.6px] font-light tracking-[0.0125em] mb-6 min-[992px]:text-base">
				{childText}
			</p>
			<SubscriptionField />
		</section>
	);
};

Newsletter.propTypes = {
	headingText: PropTypes.string.isRequired,
	childText: PropTypes.string.isRequired
};

export default Newsletter;
