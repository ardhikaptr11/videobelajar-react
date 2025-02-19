import InputWithLabel from "@components/Molecules/InputWithLabel/InputWithLabel";
import Button from "@components/Atoms/Button/Button";
import googleIcon from "@assets/google-icon.png";
import showPasswordIcon from "@assets/eye-off.png";

const RegisterForm = () => {
	return (
		<form>
			<div className="flex flex-col gap-y-3">
				<InputWithLabel label="Nama Lengkap" type="text" name="fullName" id="name" autoComplete="name" />
				<InputWithLabel label="E-Mail" type="email" name="email" id="email" autoComplete="email" />
				<InputWithLabel label="Jenis Kelamin" name="gender" id="gender" />
				<InputWithLabel label="No. HP" type="tel" name="phone" id="phone" autoComplete="tel" />
				<InputWithLabel
					label="Password"
					type="password"
					name="password"
					id="password"
					icon={showPasswordIcon}
					autoComplete="new-password"
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
			<div className="flex justify-end mb-5">
				<a href="#">Lupa Password?</a>
			</div>
			<div className="buttonGroup">
				<Button type="button" id="login" text="Masuk" />
				<Button type="button" id="signup" text="Daftar" />
				<div className="flex justify-center items-center text-center relative mb-6">
					<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
					<span className="w-[50px] bg-white text-[#8f8d8d] z-1">atau</span>
					<span className="top-[60%] absolute w-full border-t-[1px] border-t-[#708fac]"></span>
				</div>
				<Button type="button" id="sso" text="Daftar dengan Google" icon={googleIcon} />
			</div>
		</form>
	);
};

export default RegisterForm;
