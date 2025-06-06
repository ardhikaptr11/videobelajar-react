import { axiosClient } from "@client/axiosClient";

import { fetchSubmodules } from "@api/courses/fetchSubmodules";

export const fetchCourseModules = async (id) => {
	try {
		const response = await axiosClient.get(`courses/${id}/features/${id}-features/modules`);
		const modules = response.data?.documents;

		const moduleList = await Promise.all(
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
