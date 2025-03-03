import { useState } from "react";

import FilteringPanel from "@components/Molecules/FilteringPanel/FilteringPanel";
import Toolbar from "@components/Molecules/Toolbar/Toolbar";
import SortingTools from "@components/Atoms/SortingTools/SortingTools";
import SearchingTools from "@components/Atoms/SearchingTools/SearchingTools";
import Course from "@components/Organisms/Course/Course";
import CourseList from "@components/Molecules/CourseList/CourseList";
import courses from "../../data";

const CategoryPage = () => {
	// For searching
	const [searchItem, setSearchItem] = useState("");
	const [filteredItems, setFilteredItems] = useState(courses);

	// For sorting
	const setSortMethod = (item, type) => {
		return item === "price"
			? type === "highest"
				? [...courses].filter((course) =>
						course.isDiscount ? course.discountedPrice > 599 : course.price > 599
				  )
				: [...courses].filter((course) =>
						course.isDiscount ? course.discountedPrice < 199 : course.price < 199
				  )
			: type === "highest"
			? [...courses].filter((course) => course.rating >= 3.5)
			: [...courses].filter((course) => course.rating < 3.0);
	};

	const lowestPrice = setSortMethod("price", "lowest");
	const highestPrice = setSortMethod("price", "highest");
	const lowestRating = setSortMethod("rating", "lowest");
	const highestRating = setSortMethod("rating", "highest");
	const ascendingOrder = [...courses].sort((a, b) => a.courseInfo.title.localeCompare(b.courseInfo.title));
	const descendingOrder = [...courses].sort((a, b) => b.courseInfo.title.localeCompare(a.courseInfo.title));

	const [sortedItems, setSortedItems] = useState(courses);

	const handleSortedItems = (id) => {
		switch (id) {
			case "price-lowest":
				setSortedItems(lowestPrice);
				break;
			case "price-highest":
				setSortedItems(highestPrice);
				break;
			case "ascending":
				setSortedItems(ascendingOrder);
				break;
			case "descending":
				setSortedItems(descendingOrder);
				break;
			case "rating-highest":
				setSortedItems(lowestRating);
				break;
			case "rating-lowest":
				setSortedItems(highestRating);
				break;
			default:
				setSortedItems(courses);
		}
	};

	const handleClick = (e) => {
		const id = e.target.id;
		handleSortedItems(id);
	};

	const handleInputChange = (e) => {
		const searchTerm = e.target.value;
		setSearchItem(searchTerm);

		const filteredCourses = courses.filter((course) =>
			course.courseInfo.title.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredItems(filteredCourses);
	};

	return (
		<>
			<div className="w-fit">
				<h3 className="font-semibold text-2xl/[26.4px] font-poppins text-black min-[768px]:text-[2em]/[35.2px]">
					Koleksi Video Pembelajaran Unggulan
				</h3>
				<p className="font-normal text-[0.875em]/[19.6px] tracking-[0.0125em] mt-2.5 min-[768px]:text-base/[22.4px]">
					Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
				</p>
			</div>
			<section className="flex flex-col gap-y-6 mt-9 min-[992px]:flex-row min-[992px]:gap-x-10.5">
				<FilteringPanel />
				<Course page="categories">
					<Toolbar>
						<SortingTools condition={searchItem} onClick={(e) => handleClick(e)} />
						<SearchingTools value={searchItem} onChange={(e) => handleInputChange(e)} />
					</Toolbar>
					<CourseList courses={searchItem ? filteredItems : sortedItems} />
				</Course>
			</section>
		</>
	);
};

export default CategoryPage;
