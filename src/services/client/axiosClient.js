import axios from "axios";

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
	(config) => {
		return config.url.startsWith(":") ? { ...config, url: `${config.baseURL}${config.url}` } : config;
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
