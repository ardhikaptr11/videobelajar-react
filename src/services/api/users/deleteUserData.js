import { axiosClient } from "@client/axiosClient";
import storeUser from "@store/storeUser";

import { fetchUser } from "@api/users/fetchUser";

export const deleteUserData = async (email) => {
	try {
		const foundUser = await fetchUser(email);

		if (!foundUser) {
			throw new Error("User not found!");
		}

		await axiosClient.delete(`users/${foundUser.id}`);

		storeUser.setState((state) => ({
			currentUser: null,
			deletedUsers: [...state.deletedUsers, foundUser.email]
		}));

		console.log("✅ User deleted successfully.");
	} catch (error) {
		console.error("❌ Error deleting user data:", error.message);
	}
};
