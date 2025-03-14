import storeUser from "@store/storeUser";
import DropdownGuest from "@components/Molecules/DropdownGuest/DropdownGuest";
import DropdownUser from "@components/Molecules/DropdownUser/DropdownUser";

const DropdownMenu = () => {
	const currentUser = storeUser((state) => state.currentUser);
	const getLoginStatus = storeUser((state) => state.getLoginStatus);
	const isLoggedIn = getLoginStatus(currentUser);

	return isLoggedIn ? <DropdownUser /> : <DropdownGuest />;
};

export default DropdownMenu;
