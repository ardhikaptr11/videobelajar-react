import { axiosClient } from "@client/axiosClient";

export const updateUserData = async (id, dataToUpdate) => {
	try {
		const requestBody = {
			fields: Object.fromEntries(
				Object.entries(dataToUpdate).map(([key, value]) => [key, { stringValue: value }])
			)
		};

		const fieldPaths = Object.keys(dataToUpdate)
			.map((field) => `updateMask.fieldPaths=${encodeURIComponent(field)}`)
			.join("&");

		const response = await axiosClient.patch(`users/${id}?${fieldPaths}`, requestBody, {
			headers: {
				"Content-Type": "application/json"
			}
		});

		const fields = response.data.fields;
		const updatedData = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, value.stringValue]));

		return {
			id: id,
			fullName: updatedData.fullName,
			email: updatedData.email,
			gender: updatedData.gender,
			phone: updatedData.phone
		};
	} catch (error) {
		console.error("❌ Error updating user data:", error);
	}
};
