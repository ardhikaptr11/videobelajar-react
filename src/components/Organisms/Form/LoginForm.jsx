import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

import showToast from "../../../customFunction/showToast";
import InputWithLabel from "@components/Molecules/InputWithLabel/InputWithLabel";
import Button from "@components/Atoms/Button/Button";
import googleIcon from "@assets/google-icon.png";
import showPasswordIcon from "@assets/eye-off.png";
import storeUser from "@store/storeUser";
import storeNavigation from "@store/storeNavigation";

const LoginForm = () => {
	const navigate = useNavigate();
	const login = storeUser((state) => state.login);
	const findUser = storeUser((state) => state.findUser);
	const setLocation = storeNavigation((state) => state.setLocation);

	useEffect(() => {
		setLocation("/login");
	}, [setLocation]);

	const [credentials, setCredentials] = useState({
		email: "",
		password: ""
	});

	const handleClicked = () => {
		navigate("/signup");
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials((prev) => ({
			...prev,
			[name]: value || ""
		}));
	};

	const resetForm = () => {
		const form = document.querySelector("form");
		form.reset();
	};

	const handleSuccess = (message) => {
		showToast("success", message, { autoClose: 3000 });

		setTimeout(() => {
			login(credentials.email, credentials.password);
		}, 4000);

		resetForm();
	};

	const handleError = (message) => {
		showToast("error", message);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		const foundUser = findUser(credentials.email, credentials.password);

		const message = foundUser
			? foundUser.password === credentials.password
				? "Login berhasil!"
				: "Email atau password salah!"
			: "Akun tidak ditemukan!";

		foundUser
			? foundUser.password === credentials.password
				? handleSuccess(message)
				: handleError(message)
			: handleError(message);
	};

	return (
		<>
			<form onSubmit={(e) => handleLogin(e)}>
				<div className="flex flex-col gap-y-3 mb-3">
					<InputWithLabel
						label="E-Mail"
						type="email"
						name="email"
						id="email"
						autoComplete="email"
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="Password"
						type="password"
						name="password"
						id="password"
						icon={showPasswordIcon}
						autoComplete="current-password"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex justify-end mb-5">
					<a href="/recovery">Lupa Password?</a>
				</div>
				<div className="flex flex-col">
					<Button type="submit" id="login" text="Masuk" />
					<Button type="button" id="signup" text="Daftar" onClick={handleClicked} />
					<div className="flex justify-center items-center text-center relative mb-6">
						<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
						<span className="w-[50px] bg-white text-[#8f8d8d] z-1">atau</span>
						<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
					</div>
					<Button type="button" id="sso" text="Masuk dengan Google" icon={googleIcon} />
				</div>
			</form>
			<ToastContainer />
		</>
	);
};

export default LoginForm;
