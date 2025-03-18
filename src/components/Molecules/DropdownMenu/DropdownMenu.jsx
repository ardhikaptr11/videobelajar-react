import storeUser from "@store/storeUser";
import DropdownGuest from "@components/Molecules/DropdownGuest/DropdownGuest";
import DropdownUser from "@components/Molecules/DropdownUser/DropdownUser";

const DropdownMenu = () => {
	const currentUser = storeUser((state) => state.currentUser);
	const isLoggedIn = !!currentUser;

	return isLoggedIn ? <DropdownUser /> : <DropdownGuest />;
};

export default DropdownMenu;
