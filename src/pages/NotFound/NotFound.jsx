import { useEffect } from "react";

import { Button, Result, Flex } from "antd";
import { useNavigate } from "react-router";
import { useLocation } from "react-router";

import storeNavigation from "@store/storeNavigation";

const NotFound = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const setLocation = storeNavigation((state) => state.setLocation);

	// This is for styling purposes, since there are two types of navbar in AuthPageLayout
	// We need to set the location to "/login", so the navbar will have the same style as the one used in the login page.
	useEffect(() => {
		setLocation("/login");
	}, [location]);

	return (
		<Flex justify="center" align="center" style={{ height: "var(--login-page-height)" }}>
			<Result
				status="404"
				title="404"
				subTitle="Ups... Halaman yang Anda cari tidak ditemukan :("
				extra={
					<Button type="primary" variant="solid" color="cyan" onClick={() => navigate("/")}>
						Kembali ke Beranda
					</Button>
				}
			/>
		</Flex>
	);
};

export default NotFound;
