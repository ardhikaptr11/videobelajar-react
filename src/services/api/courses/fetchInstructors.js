import { axiosClient } from "@client/axiosClient";

export const fetchInstructors = async (id) => {
	try {
		const response = await axiosClient.get(`courses/${id}/instructors`);
		const instructors = response.data?.documents;

		const instructorList = await Promise.all(
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
