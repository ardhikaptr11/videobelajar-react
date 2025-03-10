import { fetchCourses } from "@api/fetchCourses";

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
    const filteredCourses = courses.filter((course) => course.courseInfo.slug !== slug);

    return getRandomItems(filteredCourses, count);
};

export const fetchSimilarCourses = async (slug) => {
	const courses = await fetchCourses();

	// For now we will use random courses as related courses,
	// Because in "data.js" the category is all the same
	// Later work will implement filtering based on course category
	const randomCourses = getUniqueRandomCourses(courses, slug, 3);

    return randomCourses;
};
