import AuthNavbar from "@components/Molecules/Navbar/AuthNavbar";
import styles from "@components/Layouts/AuthPageLayout.module.css";
import PropTypes from "prop-types";

const AuthPageLayout = ({ formType, children }) => {
	return (
		<>
			<header className={`${styles.header} ${formType === "login" ? styles.loginHeader : styles.registerHeader}`}>
				<AuthNavbar />
			</header>
			<main className={`${styles.content} ${formType === "login" ? styles.loginPage : styles.registerPage}`}>
				{children}
			</main>
		</>
	);
};

AuthPageLayout.propTypes = {
	formType: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default AuthPageLayout;
