import axios from "axios";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchAlumni = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/courses/${id}/alumni`);
		const alumni = response.data?.documents;

		const alumnusList = Promise.all(
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
