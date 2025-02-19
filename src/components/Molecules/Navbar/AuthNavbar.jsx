import brandLogo from "@assets/videobelajar-logo.png";

const AuthNavbar = () => {
	return (
		<nav className="h-full flex items-center">
			<a href="#" className="h-[30px] max-[768px]:h-[24px] flex items-center cursor-pointer">
				<img src={brandLogo} alt="Brand logo" className="h-full" />
			</a>
		</nav>
	);
};

export default AuthNavbar;
