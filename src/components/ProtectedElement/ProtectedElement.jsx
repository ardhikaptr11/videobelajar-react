import { Outlet } from "react-router";
import { lazy } from "react";

const NotAuthorized = lazy(() => import("@pages/NotAuthorized/NotAuthorized"));
import HomePageLayout from "@components/Layouts/HomePageLayout";
import storeUser from "@store/storeUser";

const ProtectedElement = () => {
	const isLoggedIn = storeUser((state) => state.isLoggedIn);

	return isLoggedIn ? (
		<HomePageLayout>
			<Outlet />
		</HomePageLayout>
	) : (
		<NotAuthorized />
	);
};

export default ProtectedElement;
