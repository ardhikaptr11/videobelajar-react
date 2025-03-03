import { Outlet } from "react-router";

import AuthNavbar from "@components/Molecules/Navbar/AuthNavbar";
import storeNavigation from "@store/storeNavigation";

const AuthPageLayout = () => {
	const location = storeNavigation((state) => state.location);

	return (
		<>
			<header
				className={`bg-white py-2.5 px-6 w-full h-[70px] shadow-md ${
					location === "/login" || location === "/recovery" ? "navbar" : "navbar-register"
				}`}>
				<AuthNavbar />
			</header>
			<Outlet />
		</>
	);
};

export default AuthPageLayout;
