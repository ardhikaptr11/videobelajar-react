import AuthBox from "@components/Molecules/AuthBox/AuthBox";
import RegisterForm from "@components/Organisms/Form/RegisterForm";
import AuthPageLayout from "@components/Layouts/AuthPageLayout";

const Register = () => {
	return (
		<AuthPageLayout formType="register">
			<AuthBox title="Pendaftaran Akun" subtitle="Yuk, daftarkan akunmu sekarang." action="register">
				<RegisterForm />
			</AuthBox>
		</AuthPageLayout>
	);
};

export default Register;
