import { useEffect, useState } from "react";

import Pagination from "@components/Atoms/Pagination/Pagination";
import CourseCard from "@components/Molecules/CourseCard/CourseCard";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => {
	const location = window.location.pathname;

	const [displayedData, setDisplayedData] = useState([]);
	const [direction, setDirection] = useState("right");
	const [isAnimating, setIsAnimating] = useState(false);

	useEffect(() => {
		const updateItemsPerPage = () => {
			window.innerWidth >= 1400
				? location === "/"
					? setDisplayedData(courses)
					: setDisplayedData(courses.slice(0, 6))
				: window.innerWidth >= 1200
				? setDisplayedData(courses.slice(0, 6))
				: setDisplayedData(courses.slice(0, 4));
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);

		// Cleanup event listener saat komponen unmount
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, [courses, location]); // Render only courses and location changes

	// Helper function to handle page change
	const handlePageChange = (newData, dir) => {
		setDirection(dir === 1 ? "left" : "right");
		setIsAnimating(true); // Activate animation

		setTimeout(() => {
			setDisplayedData(newData);
			setIsAnimating(false); // Disable animation
		}, 300);
	};

	return location === "/" || location === "/categories" ? (
		<div className={`flex flex-col gap-y-8 ${location === "/" ? "mt-8" : "mt-0"}`}>
			<div className="w-full">
				<div
					className={`w-full flex flex-wrap gap-6 justify-start slide-container ${
						isAnimating ? direction : ""
					}`}>
					{window.innerWidth >= 1400 && location === "/" ? (
						<>
							{courses.map((course, index) => (
								<CourseCard key={index} course={course} location={location} />
							))}
						</>
					) : (
						<>
							{displayedData.map((course, index) => (
								<CourseCard key={index} course={course} location={location} />
							))}
						</>
					)}
				</div>
			</div>
			{(window.innerWidth < 1400 || (location === "/categories" && courses.length > displayedData.length)) && (
				<Pagination courses={courses} helper={handlePageChange} />
			)}
		</div>
	) : (
		<div className="w-full flex flex-wrap gap-6 justify-start">
			{courses.map((course, index) => (
				<CourseCard key={index} course={course} location={location} />
			))}
		</div>
	);
};

CourseList.propTypes = {
	courses: PropTypes.array.isRequired
};

export default CourseList;
