import AuthBox from "../../components/Molecules/AuthBox/AuthBox";
import LoginForm from "../../components/Organisms/Form/LoginForm";
import AuthPageLayout from "../../components/Layouts/AuthPageLayout";

const Login = () => {
	return (
		<AuthPageLayout authType="login">
			<AuthBox title="Masuk ke Akun" subtitle="Yuk, lanjutin belajarmu di videobelajar">
				<LoginForm />
			</AuthBox>
		</AuthPageLayout>
	);
};

export default Login;
