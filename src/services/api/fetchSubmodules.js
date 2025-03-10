import axios from "axios";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchSubmodules = async (id, moduleId) => {
	try {
		const response = await axios.get(
			`${BASE_URL}/courses/${id}/features/${id}-features/modules/${moduleId}/submodules`
		);
		const submodules = response.data?.documents;

		const submoduleList = Promise.all(
			submodules.map(async (doc) => {
				const submodule = doc.fields;

				return {
					id: doc.name.split("/").pop(),
					name: submodule.name.stringValue,
					duration: Number(submodule.duration.integerValue)
				};
			})
		);

		return submoduleList;
	} catch (error) {
		console.error("❌ Error fetching course submodules:", error);
	}
};
