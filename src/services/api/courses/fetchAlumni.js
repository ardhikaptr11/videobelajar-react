import { axiosClient } from "@client/axiosClient";

export const fetchAlumni = async (id) => {
	try {
		const response = await axiosClient.get(`courses/${id}/alumni`);
		const alumni = response.data?.documents;

		const alumnusList = await Promise.all(
			alumni.map(async (doc) => {
				const alumnus = doc.fields;

				return {
					avatar: alumnus.avatar.stringValue,
					name: alumnus.name.stringValue,
					batch: alumnus.batch.stringValue,
					givenReview: alumnus.givenReview.stringValue,
					givenRating: alumnus.givenRating.doubleValue
				};
			})
		);
		return alumnusList;
	} catch (error) {
		console.error("❌ Error fetching alumni:", error);
	}
};
