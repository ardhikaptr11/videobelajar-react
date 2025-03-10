import axios from "axios";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchCourseFeatures = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/courses/${id}/features`);
		const features = response.data?.documents;

		const doc = features[0].fields;

		return {
			totalVideo: Number(doc.totalVideos.integerValue),
			totalDocument: Number(doc.totalDocuments.integerValue),
			featuredLanguage: doc.featuredLanguage.stringValue,
			hasCertificate: doc.hasCertificate.booleanValue
		};
	} catch (error) {
		console.error("❌ Error fetching course details:", error);
	}
};
