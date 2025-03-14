import { IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

import AuthBox from "@components/Molecules/AuthBox/AuthBox";
import PasswordRecoveryForm from "@components/Organisms/Form/PasswordRecoveryForm";
import { useNavigate } from "react-router";

const PasswordRecovery = () => {
	const navigate = useNavigate();

	return (
		<main className="flex relative items-center h-(--login-page-height) login-max-h-570">
			<div
				className="flex items-center gap-2 cursor-pointer absolute top-5 left-5 group"
				onClick={(e) => {
					e.preventDefault();
					navigate("/login");
				}}>
				<div className="flex items-center justify-center bg-[#3ecf4c] size-[20px] rounded-full group-hover:translate-x-[-5px] transition-transform min-[576px]:size-[30px]">
					<IonIcon
						icon={arrowBackOutline}
						className="text-base group-hover:text-white min-[576px]:text-[20px]"
					/>
				</div>
				<p className="font-bold text-base group-hover:text-black min-[576px]:text-[20px]">Login</p>
			</div>
			<AuthBox title="Pulihkan Password" subtitle="Perbarui passwordmu dengan mudah disini" action="recovery">
				<PasswordRecoveryForm />
			</AuthBox>
		</main>
	);
};

export default PasswordRecovery;
