import AuthBox from "@components/Molecules/AuthBox/AuthBox";
import LoginForm from "@components/Organisms/Form/LoginForm";

const LoginPage = () => {
	return (
		<main className="flex relative items-center h-(--login-page-height) login-max-h-570">
			<AuthBox title="Masuk ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar">
				<LoginForm />
			</AuthBox>
		</main>
	);
};

export default LoginPage;
