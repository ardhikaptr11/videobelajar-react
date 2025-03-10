import { useState, useEffect } from "react";

import { fetchCourses } from "@api/fetchCourses"

const useFetchCourses = () => {
	const [courses, setCourse] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getAllCourses = async () => {
			const courseList = await fetchCourses();
			setCourse(courseList);
			setLoading(false);
		};

		getAllCourses();
	}, []);

	return { courses, loading };
};

export default useFetchCourses;