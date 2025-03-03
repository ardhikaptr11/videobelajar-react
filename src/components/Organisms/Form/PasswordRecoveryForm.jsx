import { useEffect, useState } from "react";
import { z } from "zod";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";

import showToast from "../../../customFunction/showToast";
import InputWithLabel from "@components/Molecules/InputWithLabel/InputWithLabel";
import Button from "@components/Atoms/Button/Button";
import showPasswordIcon from "@assets/eye-off.png";
import storeUser from "@store/storeUser";
import storeNavigation from "@store/storeNavigation";

const RecoveryPasswordForm = () => {
	const navigate = useNavigate();

	const findUser = storeUser((state) => state.findUser);
	const updateUserPassword = storeUser((state) => state.updateUserPassword);
	const setLocation = storeNavigation((state) => state.setLocation);

	useEffect(() => {
		setLocation("/recovery");
	}, [setLocation]);

	const [data, setData] = useState({
		email: "",
		password: "",
		confirmPassword: ""
	});

	const [status, setStatus] = useState(false); // "loading" || "success" || "error"
	const [showInputs, setShowInputs] = useState(false);

	const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const checkEmail = async (e) => {
		e.preventDefault();

		const validate = z
			.object({
				email: z.string().email({ message: "Email tidak valid" })
			})
			.safeParse({ email: data.email });

		if (data.email === "") {
			showToast("error", "Email tidak boleh kosong");
			return;
		}

		if (!validate.success) {
			showToast("error", validate.error.issues[0].message);
			setStatus(false);
			return;
		}

		const foundUser = findUser(data.email);

		setStatus("loading");
		await new Promise((resolve) => setTimeout(resolve, 3000));

		if (foundUser) {
			setStatus("success");
			showToast("success", "Email ditemukan!", { autoClose: 2000 });
			setTimeout(() => {
				setShowInputs(true);
			}, 3000);
		} else {
			setStatus("loading");
			setStatus("error");
			showToast("error", "Email tidak ditemukan!");
		}
	};

	const updatePassword = () => {
		const validate = z
			.object({
				password: z.string().min(8, { message: "Password minimal 8 karakter" })
			})
			.safeParse({ password: data.password });

		if (!validate.success) {
			showToast("error", validate.error.issues[0].message);
			return;
		}

		const foundUser = findUser(data.email);
		const passwordHasNotChanged = foundUser.password === data.password;

		if (data.password === "" || data.confirmPassword === "") {
			showToast("error", "Password tidak boleh kosong");
		} else if (passwordHasNotChanged) {
			showToast("error", "Password sudah digunakan");
		} else if (data.password !== data.confirmPassword) {
			showToast("error", "Password tidak sama");
		} else {
			const form = document.querySelector("form");
			form.reset();

			updateUserPassword(data.email, data.password);

			showToast("success", "Berhasil! Silahkan login kembali");
			setTimeout(() => {
				navigate("/login");
			}, 6000);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!status || status === "error") {
			await checkEmail(e);
		} else {
			updatePassword();
		}
	};

	return (
		<>
			<form noValidate onSubmit={handleSubmit}>
				<div className="flex flex-col gap-y-3 mb-5">
					<div className="relative">
						<InputWithLabel
							label="E-Mail"
							type="email"
							name="email"
							id="email"
							autoComplete="email"
							onChange={(e) => handleChange(e)}
						/>
						{status === "loading" && (
							<ClipLoader
								color="#3ecf4c"
								cssOverride={{
									position: "absolute",
									top: "50%",
									transform: "translateY(-50%)",
									right: 10
								}}
								size={25}
							/>
						)}
						{status === "success" && (
							<FontAwesomeIcon
								icon={faCheck}
								className={`absolute text-[#3ecf4c] top-1/2 transform-["translateY(-50%)"] right-2.5`}
								size={"xl"}
							/>
						)}
						{status === "error" && (
							<FontAwesomeIcon
								icon={faXmark}
								className={`absolute text-[#f44336] top-1/2 transform-["translateY(-50%)"] right-2.5`}
								size={"xl"}
							/>
						)}
					</div>
					{showInputs && (
						<>
							<InputWithLabel
								label="Password baru"
								type="password"
								name="password"
								id="password"
								icon={showPasswordIcon}
								autoComplete="current-password"
								onChange={(e) => handleChange(e)}
							/>
							<InputWithLabel
								label="Ulangi password"
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								icon={showPasswordIcon}
								autoComplete="current-password"
								onChange={(e) => handleChange(e)}
							/>
						</>
					)}
				</div>
				<div className="flex flex-col">
					<Button type="submit" id="update" text={showInputs ? "Perbarui" : "Lanjutkan"} />
				</div>
			</form>
			<ToastContainer />
		</>
	);
};

export default RecoveryPasswordForm;
