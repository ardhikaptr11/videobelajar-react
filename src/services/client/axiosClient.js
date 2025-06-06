import axios from "axios";
import { getAuth } from "firebase/auth";
import { app } from "../../firebase";

export const axiosClient = axios.create({
	baseURL:
		import.meta.env.VITE_DEV === "true"
			? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
			: import.meta.env.VITE_FIREBASE_BASE_URL_PROD,
	headers: {
		"Content-Type": "application/json"
	}
});

axiosClient.interceptors.request.use(
	async (config) => {
		const auth = getAuth(app);
		const user = auth.currentUser;

		if (user) {
			const token = await user.getIdToken();
			config.headers.Authorization = `Bearer ${token}`;
		}

		if (config.url.startsWith(":")) {
			config.url = `${config.baseURL}${config.url}`;
		}

		return config;
	},
	(error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
	(response) => response,
	(error) => {
		console.error("❌ API Error:", error);
		return Promise.reject(error);
	}
);
