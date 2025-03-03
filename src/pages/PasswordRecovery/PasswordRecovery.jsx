import AuthBox from "@components/Molecules/AuthBox/AuthBox";
import PasswordRecoveryForm from "@components/Organisms/Form/PasswordRecoveryForm";

const PasswordRecovery = () => {
	return (
		<main className="flex relative items-center h-(--login-page-height) login-max-h-570">
			<AuthBox title="Pulihkan Password" subtitle="Perbarui passwordmu dengan mudah disini" action="recovery">
				<PasswordRecoveryForm />
			</AuthBox>
		</main>
	);
};

export default PasswordRecovery;
