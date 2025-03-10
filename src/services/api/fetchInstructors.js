import axios from "axios";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchInstructors = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/courses/${id}/instructors`);
		const instructors = response.data?.documents;

		const instructorList = Promise.all(
			instructors.map((doc) => {
				const instructor = doc.fields;

				return {
					avatar: instructor.avatar.stringValue,
					name: instructor.name.stringValue,
					careerBackground: instructor.careerBackground.stringValue,
					job: instructor.job.stringValue,
					company: instructor.company.stringValue
				};
			})
		);
		return instructorList;
	} catch (error) {
		console.error("❌ Error fetching instructors:", error);
	}
};
