import AuthBox from "@components/Molecules/AuthBox/AuthBox";
import RegisterForm from "@components/Organisms/Form/RegisterForm";

const RegisterPage = () => {
	return (
		<main className="flex relative items-center">
			<AuthBox title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang." action="register">
				<RegisterForm />
			</AuthBox>
		</main>
	);
};

export default RegisterPage;
