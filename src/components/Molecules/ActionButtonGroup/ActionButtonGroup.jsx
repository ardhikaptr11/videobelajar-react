import PropTypes from "prop-types";
import { useNavigate } from "react-router";

import Button from "@components/Atoms/Button/Button";
import storeDropdown from "@store/storeDropdown";
import storeNavigation from "@store/storeNavigation";

const ActionButtonGroup = ({ forComponent }) => {
	const setLocation = storeNavigation((state) => state.setLocation);
	const hideDropdown = storeDropdown((state) => state.hideDropdown);
	const navigate = useNavigate();

	const handleClicked = (e) => {
		if (e.currentTarget.id === "login") {
			setLocation("/login");
			navigate("/login");
		} else {
			setLocation("/signup");
			navigate("/signup");
		}

		hideDropdown();
	};

	return (
		<div
			className={`flex ${
				forComponent === "navbar"
					? "justify-between items-center gap-1.5 max-[768px]:hidden"
					: "flex-col gap-2 p-3"
			}`}>
			<Button
				type="button"
				id="login"
				text="Login"
				style="w-full h-[36px] mb-0 p-[7px_22px]  bg-[#3ecf4c] hover:bg-[#36b343] border-none"
				textStyle="font-bold font-button leading-none text-white"
				onClick={(e) => handleClicked(e)}
			/>
			<Button
				type="button"
				id="signup"
				text="Sign Up"
				style="w-full h-[36px] mb-0 p-[7px_22px]  bg-[#e9fde2] border-[1px] border-solid border-[#3ecf4c] bg-transparent hover:bg-[#e9fde2]"
				textStyle="font-bold font-button leading-none text-[#3ecf4c] group-hover:text-[#36b343]"
				onClick={(e) => handleClicked(e)}
			/>
		</div>
	);
};

ActionButtonGroup.propTypes = {
	forComponent: PropTypes.string
};

export default ActionButtonGroup;
