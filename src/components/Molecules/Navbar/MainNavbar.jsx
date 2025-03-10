import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import brandLogo from "@assets/videobelajar-logo.png";
import hamburgerIcon from "@assets/hamburger-icon.png";
import ActionButtonGroup from "@components/Molecules/ActionButtonGroup/ActionButtonGroup";
import storeUser from "@store/storeUser";
import storeDropdown from "@store/storeDropdown";

const MainNavbar = () => {
	const isLoggedIn = storeUser((state) => state.isLoggedIn);
	const navigate = useNavigate();
	const location = window.location.pathname;
	const getGravatarUrl = storeUser((state) => state.getGravatarUrl);
	const currentUser = storeUser((state) => state.currentUser);

	const userAvatar = isLoggedIn ? getGravatarUrl(currentUser, 44) : "";

	const toggleDropdown = storeDropdown((state) => state.toggleDropdown);
	const [isClicked, setIsClicked] = useState(false);

	const useBackButton = () => {
		const [isBack, setIsBack] = useState(false);
		const handleEvent = () => {
			setIsBack(true);
			setIsClicked(false);
		};

		useEffect(() => {
			window.addEventListener("popstate", handleEvent);
			return () => window.removeEventListener("popstate", handleEvent);
		});

		return isBack;
	};

	// eslint-disable-next-line no-unused-vars
	const isBack = useBackButton();

	const setClasses = () => {
		let setOfClasses = "text-base cursor-pointer max-[768px]:hidden";

		if (!isLoggedIn && location === "/") {
			setOfClasses = `${setOfClasses} text-[#1d2433]`;
		} else if (((!isLoggedIn || isLoggedIn) && location === "/categories") || isClicked) {
			setOfClasses = `${setOfClasses} text-[#3ecf4c]`;
		}

		return setOfClasses;
	};

	const handleClick = () => {
		setIsClicked(true);
		navigate("/categories");
	};

	return (
		<nav
			className={`grid ${
				isLoggedIn ? "grid-cols-[1fr_auto]" : "grid-cols-[0.95fr_auto]"
			} gap-9 w-full max-[768px]:grid-cols-none`}>
			<div className="flex items-center justify-between">
				<a href="/" className="h-[30px] max-[768px]:h-[24px] flex items-center cursor-pointer">
					<img src={brandLogo} alt="Platform logo" className="h-full" />
				</a>
				<a className={setClasses()} onClick={handleClick}>
					Kategori
				</a>
				<img
					src={hamburgerIcon}
					alt="Hamburger icon"
					className="hidden cursor-pointer max-[768px]:block"
					onClick={toggleDropdown}
				/>
			</div>
			{isLoggedIn ? (
				<img
					src={userAvatar}
					alt="User avatar"
					className="block cursor-pointer max-[768px]:hidden"
					onClick={toggleDropdown}
				/>
			) : (
				<ActionButtonGroup forComponent="navbar" />
			)}
		</nav>
	);
};

export default MainNavbar;
