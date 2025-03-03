import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import chevronForward from "@assets/chevron-forward.png";

const Pagination = ({ courses, helper }) => {
	const location = window.location.pathname;

	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(4);

	const totalPages = Math.ceil(courses.length / itemsPerPage);

	useEffect(() => {
		const updateItemsPerPage = () => {
			if (window.innerWidth >= 1200) {
				setItemsPerPage(6);
			} else if (window.innerWidth >= 576) {
				setItemsPerPage(4);
			}
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);

		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	const changePage = (newPage) => {
		const startIndex = (newPage - 1) * itemsPerPage;
		const displayedData = courses.slice(startIndex, startIndex + itemsPerPage);
		helper(displayedData, newPage > currentPage ? 1 : -1);
		setCurrentPage(newPage);
	};

	const getPageNumbers = () => {
		if (totalPages <= 5) {
			return Array.from({ length: totalPages }, (_, i) => i + 1);
		} else if (currentPage <= 5) {
			return [1, 2, 3, 4, 5, "...", totalPages];
		} else {
			return [1, "...", ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)];
		}
	};

	return (
		<>
			<div className={`flex ${location === "/" ? "justify-center" : "justify-end"}`}>
				<div className="flex w-fit">
					<button
						onClick={() => changePage(Math.max(currentPage - 1, 1))}
						disabled={currentPage === 1}
						className="flex justify-center items-center size-[40px] p-2 rounded-[4px] cursor-pointer">
						<img
							src={chevronForward}
							alt="Chevvron Forward Reversed"
							className="transform-[rotate(180deg)]"
						/>
					</button>

					<div className="flex justify-between">
						{getPageNumbers().map((page, index) => (
							<button
								key={index}
								onClick={() => typeof page === "number" && changePage(page)}
								className={`${
									currentPage === page ? "active bg-[#ffbd3a] text-white" : "bg-transparent"
								} size-[40px] p-2 rounded-[4px] cursor-pointer`}
								disabled={page === "..."}>
								{page}
							</button>
						))}
					</div>

					<button
						onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
						disabled={currentPage === totalPages}
						className="flex justify-center items-center size-[40px] p-2 rounded-[4px] cursor-pointer">
						<img src={chevronForward} alt="Chevvron Forward" />
					</button>
				</div>
			</div>
		</>
	);
};

Pagination.propTypes = {
	courses: PropTypes.array.isRequired,
	helper: PropTypes.func.isRequired
};

export default Pagination;
