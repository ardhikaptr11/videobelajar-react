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
			<Button type="button" id="login" text="Login" grouped={true} onClick={(e) => handleClicked(e)} />
			<Button
				type="button"
				id="signup"
				text="Sign Up"
				grouped={true}
				style="outline"
				onClick={(e) => handleClicked(e)}
			/>
		</div>
	);
};

ActionButtonGroup.propTypes = {
	forComponent: PropTypes.string
};

export default ActionButtonGroup;
