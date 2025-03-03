import { Bounce, toast } from "react-toastify";

const showToast = (type, message, settings = null) => {
	const defaultOptions = {
		position: "top-center",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: false,
		pauseOnHover: false,
		draggable: true,
		progress: undefined,
		theme: "light",
		transition: Bounce,
		closeButton: false
	};

	const options = !settings ? defaultOptions : { ...defaultOptions, ...settings };

	const notify = (type, message) => {
		if (type === "success") {
			options.draggable = false;
			toast.success(message, options);
		} else {
			options.draggable = true;
			options.closeButton = true;
			toast.error(message, options);
		}
	};

	notify(type, message);
};

export default showToast;
