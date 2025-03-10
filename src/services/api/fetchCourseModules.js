import axios from "axios";

import { fetchSubmodules } from "@api/fetchSubmodules";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchCourseModules = async (id) => {
	try {
		const response = await axios.get(`${BASE_URL}/courses/${id}/features/${id}-features/modules`);
		const modules = response.data?.documents;

		const moduleList = Promise.all(
			modules.map(async (doc) => {
				const moduleId = doc.name.split("/").pop();
				const submodules = await fetchSubmodules(id, moduleId);

				return {
					id: moduleId,
					name: doc.fields.name.stringValue,
					submodules: submodules
				};
			})
		);
		return moduleList;
	} catch (error) {
		console.error("❌ Error fetching course modules:", error);
	}
};
