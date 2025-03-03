import { useNavigate } from 'react-router';
import brandLogo from "@assets/videobelajar-logo.png";

const AuthNavbar = () => {
	const navigate = useNavigate();

	const handleClicked = () => {
		navigate("/");
	};

	return (
		<nav className="h-full flex items-center">
			<a href="/" className="h-[30px] max-[768px]:h-[24px] flex items-center cursor-pointer">
				<img src={brandLogo} alt="Brand logo" className="h-full" onClick={handleClicked}/>
			</a>
		</nav>
	);
};

export default AuthNavbar;
