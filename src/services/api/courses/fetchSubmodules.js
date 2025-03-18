import { axiosClient } from "@client/axiosClient";

export const fetchSubmodules = async (id, moduleId) => {
	try {
		const response = await axiosClient.get(`courses/${id}/features/${id}-features/modules/${moduleId}/submodules`);
		const submodules = response.data?.documents;

		const submoduleList = await Promise.all(
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
