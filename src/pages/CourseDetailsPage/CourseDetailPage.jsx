import { useParams } from "react-router";

import Heroku from "@components/Molecules/Heroku/Heroku";
import DetailsWrapper from "@components/Organisms/DetailsWrapper/DetailsWrapper";
import DetailsContent from "@components/Molecules/DetailsContent/DetailsContent";
import PurchasingPanel from "@components/Molecules/PurchasingPanel/PurchasingPanel";
import Breadcrumb from "@components/Atoms/Breadcrumb/Breadcrumb";
import CourseList from "@components/Molecules/CourseList/CourseList";
import courses from "../../data";

// Helper function to get random items from an array (Fisher-Yates Shuffle)
// source: geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
const getRandomItems = (arr, count) => {
	let shuffled = arr.slice(); // Copy the array to avoid mutation

	for (let i = shuffled.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, count);
};

const getUniqueRandomCourses = (courses, slug, count) => {
	// Get rid a the course with the same slug to be randomized
	const filteredCourses = courses.filter((course) => course.slugName !== slug);

	return getRandomItems(filteredCourses, count);
};

const CourseDetailsPage = () => {
	const { slug } = useParams();
	const course = courses.find((course) => course.slugName === slug);

	// For now we will use random courses as related courses,
	// Because in "data.js" the category is all the same
	// Later work will implement filtering based on course category
	const randomCourses = getUniqueRandomCourses(courses, slug, 3);

	return (
		<>
			<Breadcrumb category={course.courseInfo.category} title={course.courseInfo.title} />
			<Heroku course={course} position="details-page" />
			<DetailsWrapper>
				<DetailsContent course={course} />
				<PurchasingPanel course={course} />
			</DetailsWrapper>
			<section className="flex flex-col gap-y-6 mt-9">
				<div className="w-fit">
					<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
						Video Pembelajaran Terkait Lainnya
					</h5>
					<p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
				</div>
				<CourseList courses={randomCourses} />
			</section>
		</>
	);
};

export default CourseDetailsPage;
