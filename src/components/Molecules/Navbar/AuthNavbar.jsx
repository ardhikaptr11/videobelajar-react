import brandLogo from "@assets/videobelajar-logo.png";
import styles from "./AuthNavbar.module.css";
import "@components/style.css";

const AuthNavbar = () => {
	return (
		<nav className={styles.authNavbar}>
			<a href="#" className="navbarBrand">
				<img src={brandLogo} alt="Brand logo" />
			</a>
		</nav>
	);
};

export default AuthNavbar;
