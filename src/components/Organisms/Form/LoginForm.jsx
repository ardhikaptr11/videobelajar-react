import { useCallback, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { ToastContainer } from "react-toastify";
import bcrypt from "bcryptjs";

import showToast from "../../../customFunction/showToast";
import InputWithLabel from "@components/Molecules/InputWithLabel/InputWithLabel";
import Button from "@components/Atoms/Button/Button";
import googleIcon from "@assets/google-icon.png";
import showPasswordIcon from "@assets/eye-off.png";
import storeUser from "@store/storeUser";
import storeNavigation from "@store/storeNavigation";

import { fetchUser } from "@api/users/fetchUser";

const LoginForm = () => {
	const navigate = useNavigate();

	const setLocation = storeNavigation((state) => state.setLocation);

	const [isLoginReady, setIsLoginReady] = useState(null);
	const [credentials, setCredentials] = useState({
		email: "",
		password: ""
	});
	const [foundUser, setFoundUser] = useState(null);

	useEffect(() => {
		setLocation("/login");
	}, [setLocation]);

	const handleSuccess = useCallback(
		(message) => {
			showToast("success", message, {
				onClose: () => {
					navigate("/", { replace: true });
					!sessionStorage.getItem("origin") && sessionStorage.setItem("origin", "/login");
				}
			});
			resetForm();
		},
		[navigate]
	);

	const handleError = useCallback((message) => {
		showToast("error", message);
	}, []);

	const verifyPassword = useCallback(
		(password) => {
			bcrypt.compare(password, foundUser.password, (err, isMatch) => {
				if (err || !isMatch) {
					handleError("Email dan password salah!");
					return;
				}

				storeUser.setState({
					currentUser: {
						id: foundUser.id,
						fullName: foundUser.fullName,
						email: foundUser.email,
						gender: foundUser.gender,
						phone: foundUser.phone
					}
				});

				handleSuccess("Login Berhasil!");
			});
		},
		[foundUser, handleSuccess, handleError, storeUser]
	);

	useEffect(() => {
		if (!isLoginReady || !foundUser) return;
		setIsLoginReady(false);
		verifyPassword(credentials.password);
	}, [isLoginReady, foundUser, verifyPassword]);

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
		setCredentials({
			email: "",
			password: ""
		});
	};

	const handleLogin = async (e) => {
		e.preventDefault();

		const user = await fetchUser(credentials.email);

		if (!user) {
			handleError("Akun tidak ditemukan!");
			return;
		}

		setFoundUser(user);
		setIsLoginReady(true);
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
						value={credentials.email}
						onChange={(e) => handleChange(e)}
					/>
					<InputWithLabel
						label="Password"
						type="password"
						name="password"
						id="password"
						icon={showPasswordIcon}
						autoComplete="current-password"
						value={credentials.password}
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex justify-end mb-5">
					<Link to="/recovery">Lupa Password?</Link>
				</div>
				<div className="flex flex-col">
					<Button
						type="submit"
						id="login"
						text="Masuk"
						style="w-full h-[36px] mb-4 p-[7px_22px] bg-[#3ecf4c] hover:bg-[#36b343] border-none"
						textStyle="font-bold font-button leading-none text-white"
					/>
					<Button
						type="button"
						id="signup"
						text="Daftar"
						style="w-full h-[36px] mb-4 p-[7px_22px] bg-[#e9fde2] border-none"
						textStyle="font-bold font-button leading-none text-[#3ecf4c]"
						onClick={handleClicked}
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

export default LoginForm;
