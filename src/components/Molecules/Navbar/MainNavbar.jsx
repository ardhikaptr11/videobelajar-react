import styles from './MainNavbar.module.css';
import brandLogo from '@assets/videobelajar-logo.png';
import hamburgerIcon from '@assets/hamburger-icon.png';
import userAvatar from '@assets/user-avatar.png';


const MainNavbar = () => {
	return (
		<nav className={styles.mainNavbar}>
			<div className={styles.navContent}>
				<a href="#" className="navbarBrand">
					<img src={brandLogo} alt="Platform logo" />
				</a>
				<h2 className={styles.category}>Kategori</h2>
				<img src={hamburgerIcon} alt="Hamburger icon" className={styles.hamburger} />
			</div>
			<img src={userAvatar} alt="User avatar" className={styles.userAvatar} />
		</nav>
	);
};

export default MainNavbar;
