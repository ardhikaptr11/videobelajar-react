import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import { z } from "zod";

import showToast from "../../../customFunction/showToast";
import InputWithLabel from "@components/Molecules/InputWithLabel/InputWithLabel";
import Button from "@components/Atoms/Button/Button";
import googleIcon from "@assets/google-icon.png";
import showPasswordIcon from "@assets/eye-off.png";
import storeUser from "@store/storeUser";
import storeNavigation from "@store/storeNavigation";

import { saveUserData } from "@api/saveUserData";

const RegisterSchema = z.object({
	fullName: z.string().min(1, { message: "Nama tidak boleh kosong" }),
	email: z.string().email({ message: "Email tidak valid" }),
	gender: z.string().min(1, { message: "Silahkan pilih jenis kelamin" }),
	phone: z.string().regex(/^(?!0|62)\d+$/, { message: "Nomor HP tidak valid" }),
	password: z.string().min(8, { message: "Password minimal 8 karakter" })
});

const RegisterForm = () => {
	const deletedUsers = storeUser((state) => state.deletedUsers);
	// const register = storeUser((state) => state.register);
	const navigate = useNavigate();
	const setLocation = storeNavigation((state) => state.setLocation);

	useEffect(() => {
		setLocation("/signup");
	}, [setLocation]);

	const [errors, setErrors] = useState({
		fullName: "",
		email: "",
		gender: "",
		phone: "",
		password: "",
		confirmPassword: ""
	});

	useEffect(() => {
		const isAllEmpty = Object.values(errors).every((x) => x !== "");
		const errorMessages = Object.values(errors).filter((x) => x !== "");
		const totalEmpty = errorMessages.length;

		if (isAllEmpty) {
			showToast("error", "Form tidak boleh kosong.");
		} else if (totalEmpty > 1) {
			showToast("error", "Mohon isi semua field.");
		} else {
			const emptyField = Object.entries(errors)
				.filter(([, value]) => value !== "")
				.map(([key]) => key)[0];
			const errorMessages = errors[emptyField];
			showToast("error", errorMessages);
		}
	}, [errors]);

	const [userData, setUserData] = useState({
		fullName: "",
		email: "",
		gender: "",
		phone: "",
		password: ""
	});

	const handleClicked = () => {
		navigate("/login");
	};

	const resetForm = () => {
		const form = document.querySelector("form");
		form.reset();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData((prev) => ({
			...prev,
			[name]: value
		}));
	};

	const handleRegister = async (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const phone = e.target.phone.value;
		const confirmPassword = e.target.confirmPassword.value;
		const password = e.target.password.value;

		const result = RegisterSchema.safeParse(userData);

		if (!result.success) {
			const flattenedErrors = result.error.flatten();
			const fieldErrors = flattenedErrors.fieldErrors;
			const errorMessages = Object.fromEntries(
				Object.entries(fieldErrors).map(([key, value]) => [key, value[0]])
			);

			setErrors((prevErrors) => {
				const updatedErrors = { ...prevErrors };

				Object.keys(prevErrors).forEach((key) => {
					updatedErrors[key] = errorMessages[key] || "";
				});

				if (email === "") {
					updatedErrors.email = "Email tidak boleh kosong";
				} else if (phone === "") {
					updatedErrors.phone = "Nomor HP tidak boleh kosong";
				} else if (password === "" && confirmPassword === "") {
					updatedErrors.password = "Password tidak boleh kosong";
					updatedErrors.confirmPassword = "Password tidak boleh kosong";
				} else if (password === "") {
					updatedErrors.password = "Password tidak boleh kosong";
				}

				return updatedErrors;
			});
		} else {
			if (password !== confirmPassword) {
				showToast("error", "Password tidak sama.");
				return;
			}

			const emailAlreadyUsed = deletedUsers.includes(email);
			if (emailAlreadyUsed) {
				showToast("error", "Email sudah pernah digunakan.");
				return;
			}

			try {
				const success = await saveUserData(userData);

				if (success) {
					showToast("success", "Registrasi berhasil!", { onClose: () => navigate("/login") });
					resetForm();
				}
			} catch (error) {
				console.error("Kesalahan saat menyimpan data pengguna:", error);
				showToast("error", "Terjadi kesalahan saat registrasi.");
			}
		}
	};

	return (
		<>
			<form onSubmit={(e) => handleRegister(e)} noValidate>
				<div className="flex flex-col gap-y-3 mb-5">
					<InputWithLabel
						label="Nama Lengkap"
						type="text"
						name="fullName"
						id="name"
						autoComplete="name"
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="E-Mail"
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="Jenis Kelamin"
						name="gender"
						id="gender"
						selected={userData.gender}
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="No. HP"
						type="tel"
						name="phone"
						id="phone"
						autoComplete="tel"
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="Password"
						type="password"
						name="password"
						id="password"
						icon={showPasswordIcon}
						autoComplete="new-password"
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="Konfirmasi Password"
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						icon={showPasswordIcon}
						autoComplete="new-password"
					/>
				</div>
				<div className="buttonGroup">
					<Button
						type="button"
						id="login"
						text="Masuk"
						style="w-full h-[36px] mb-4 p-[7px_22px] bg-[#3ecf4c] hover:bg-[#36b343] border-none"
						textStyle="font-bold font-button leading-none text-white"
						onClick={handleClicked}
					/>
					<Button
						type="submit"
						id="signup"
						text="Daftar"
						style="w-full h-[36px] mb-4 p-[7px_22px] bg-[#e9fde2] border-none"
						textStyle="font-bold font-button leading-none text-[#3ecf4c]"
					/>
					<div className="flex justify-center items-center text-center relative mb-6">
						<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
						<span className="w-[50px] bg-white text-[#8f8d8d] z-1">atau</span>
						<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
					</div>
					<Button
						type="button"
						id="sso"
						text="Masuk dengan Google"
						icon={googleIcon}
						style="w-full border-none outline-none cursor-pointer rounded-[10px] text-[1em] flex justify-center items-center bg-transparent"
						textStyle="ml-2 text-[#4a505c] font-bold font-button"
					/>
				</div>
			</form>
			<ToastContainer />
		</>
	);
};

export default RegisterForm;
