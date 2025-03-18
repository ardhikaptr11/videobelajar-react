import bcrypt from "bcryptjs";

import { axiosClient } from "@client/axiosClient";

export const saveUserData = async (userData) => {
	try {
		const hashedPassword = await bcrypt.hash(userData.password, 10);

		const formattedUserData = {
			fields: {
				fullName: { stringValue: userData.fullName },
				email: { stringValue: userData.email },
				gender: { stringValue: userData.gender },
				phone: { stringValue: `0${userData.phone}` },
				password: { stringValue: hashedPassword }
			}
		};

		const response = await axiosClient.post(`users`, formattedUserData);
		return !!response.data;
	} catch (error) {
		console.error("❌ Error saving user data:", error);
	}
};
