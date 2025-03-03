import { useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const SortingTools = ({ condition, onClick }) => {
	// Value might be used in the future, so keep it for later use
	const courseCategories = [
		{ value: "price-lowest", label: "Harga Terendah" },
		{ value: "price-highest", label: "Harga Tertinggi" },
		{ value: "ascending", label: "A to Z" },
		{ value: "descending", label: "Z to A" },
		{ value: "rating-highest", label: "Rating Tertinggi" },
		{ value: "rating-lowest", label: "Rating Terendah" }
	];

	const [isClicked, setIsClicked] = useState({
		"price-lowest": false,
		"price-highest": false,
		ascending: false,
		descending: false,
		"rating-highest": false,
		"rating-lowest": false
	});
	const [isActive, setIsActive] = useState(false);

	return (
		<section
			className={`relative order-2 min-[576px]:order-1 ${
				!condition ? "pointer-events-auto" : "pointer-events-none"
			}`}>
			<div className="flex flex-col">
				<p
					className="w-full flex items-center justify-between h-[48px] gap-x-2 p-[12px] border border-solid border-[#3a35411f] cursor-pointer rounded-[10px]"
					onClick={() => setIsActive(!isActive)}>
					Urutkan
					<span>
						<FontAwesomeIcon icon={faCaretDown} />
					</span>
				</p>
				{isActive && (
					<div className="absolute w-full top-14 left-0 z-10 min-[576px]:w-[150px] min-[768px]:left-auto min-[768px]:right-0 bg-white border border-solid border-[#3a35411f] rounded-[10px] tracking-[0.0125em]">
						{courseCategories.map((category, index) => (
							<p
								key={index}
								id={category.value}
								className={`cursor-pointer text-[14px]/[19.6px] font-medium font-button p-[10px_12px] hover:bg-[#f4f5fa] hover:font-bold hover:text-black ${
									isClicked[category.value] ? "bg-[#f4f5fa] font-bold text-black" : "bg-transparent"
								}`}
								onClick={(e) => {
									setIsClicked({
										"price-lowest": false,
										"price-highest": false,
										ascending: false,
										descending: false,
										"rating-highest": false,
										"rating-lowest": false
									});
									setIsClicked((prev) => ({
										...prev,
										[e.target.id]: true
									}));
									onClick(e);
								}}>
								{category.label}
							</p>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

SortingTools.propTypes = {
	condition: PropTypes.string,
	onClick: PropTypes.func
};

export default SortingTools;
