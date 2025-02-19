import PropTypes from "prop-types";

const CategoriesTab = ({ categories }) => {
	return (
		<div className="overflow-x-auto whitespace-nowrap bg-transparent">
			{categories.map((category, index) => {
				return (
					<a key={index} href="#" className="inline-block text-center leading-none p-[14px_0] no-underline text-black cursor-pointer first:text-[#ff5733] not-[last-child]:mr-[10px]">
						{category}
					</a>
				);
			})}
		</div>
	);
};

CategoriesTab.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoriesTab;
