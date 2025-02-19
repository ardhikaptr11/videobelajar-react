import AuthNavbar from "@components/Molecules/Navbar/AuthNavbar";
import PropTypes from "prop-types";

const AuthPageLayout = ({ authType, children }) => {
	return (
		<>
			<header
				className={`bg-white py-2.5 px-6 w-full h-[70px] shadow-md ${
					authType === "login" ? "navbar-login" : "navbar-register"
				}`}>
				<AuthNavbar />
			</header>
			<main
				className={
					authType === "login" ? "flex relative items-center login-max-h-570" : "flex relative items-center"
				}>
				{children}
			</main>
		</>
	);
};


AuthPageLayout.propTypes = {
	authType: PropTypes.string,
	children: PropTypes.node.isRequired
};

export default AuthPageLayout;
