import { lazy } from "react";
import { Outlet } from "react-router";
import { Flex } from "antd";

const NotAuthorized = lazy(() => import("@pages/NotAuthorized/NotAuthorized"));

import storeUser from "@store/storeUser";
import HomePageLayout from "@components/Layouts/HomePageLayout";

import { CustomSpinner } from "@components/CustomComponent/CustomSpinner";

export const PrivateRoute = () => {
	const currentUser = storeUser((state) => state.currentUser);
	const isDeleting = sessionStorage.getItem("isDeleting");
	const isLoggingOut = sessionStorage.getItem("isLoggingOut");

	if (isDeleting || isLoggingOut) {
		return (
			<Flex align="center" style={{ height: "100vh", justifyContent: "center" }}>
				<CustomSpinner text="Redirecting..." />
			</Flex>
		);
	}

	if (!currentUser && !isDeleting) {
		return <NotAuthorized />;
	}

	return (
		<HomePageLayout>
			<Outlet />
		</HomePageLayout>
	);
};
