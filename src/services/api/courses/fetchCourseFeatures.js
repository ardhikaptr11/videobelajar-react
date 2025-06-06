import { axiosClient } from "@client/axiosClient";

export const fetchCourseFeatures = async (id) => {
	try {
		const response = await axiosClient.get(`courses/${id}/features`);
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
