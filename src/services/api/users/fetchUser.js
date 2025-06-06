import { axiosClient } from "@client/axiosClient";

export const fetchUser = async (email) => {
	const requestBody = {
		structuredQuery: {
			from: [{ collectionId: "users" }],
			where: {
				fieldFilter: {
					field: { fieldPath: "email" },
					op: "EQUAL",
					value: { stringValue: `${email}` }
				}
			}
		}
	};

	try {
		const response = await axiosClient.post(":runQuery", requestBody, {
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.data[0].document) {
			throw new Error("User not found!");
		}

		const user = response.data[0].document;
		const formattedFields = Object.fromEntries(
			Object.entries(user.fields).map(([key, value]) => [key, value.stringValue])
		);

		const formattedUserData = {
			id: user.name.split("/").pop(),
			...formattedFields
		};

		return formattedUserData;
	} catch (error) {
		console.error("❌ Error fetching user:", error.message);
	}
};
