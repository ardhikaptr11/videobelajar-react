// import ActionButtonGroup from "@components/Molecules/ActionButtonGroup/ActionButtonGroup";
import storeUser from "@store/storeUser";
import DropdownGuest from "@components/Molecules/DropdownGuest/DropdownGuest";
import DropdownUser from "@components/Molecules/DropdownUser/DropdownUser";

const DropdownMenu = () => {
	const isLoggedIn = storeUser((state) => state.isLoggedIn);

	return isLoggedIn ? <DropdownUser /> : <DropdownGuest />;
};

export default DropdownMenu;
