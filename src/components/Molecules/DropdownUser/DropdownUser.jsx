import { useNavigate } from "react-router";

import storeDropdown from "@store/storeDropdown";
import storeUser from "@store/storeUser";
import exitIcon from "@assets/exit-icon.svg";

const goTo = (page) => {
	switch (page) {
		case "Profil Saya":
			return "/profile";
		case "Kategori":
			return "/categories";
		case "Kelas Saya":
			return "/my-class";
		case "Pesanan Saya":
			return "/my-order";
		default:
			return;
	}
};

const DropdownUser = () => {
	const location = window.location.pathname;

	const isDropdownVisible = storeDropdown((state) => state.isDropdownVisible);
	const hideDropdown = storeDropdown((state) => state.hideDropdown);
	const logout = storeUser((state) => state.logout);

	const navigate = useNavigate();
	const menuList =
		location !== "/profile"
			? window.innerWidth <= 768
				? ["Profil Saya", "Kategori", "Kelas Saya", "Pesanan Saya"]
				: ["Profil Saya", "Kelas Saya", "Pesanan Saya"]
			: ["Kategori", "Kelas Saya", "Pesanan Saya"];

	const handleClick = (e) => {
		const page = e.target.innerText;
		const path = goTo(page);
		navigate(path);
		hideDropdown();
	};

	const handleLogout = () => {
		// sessionStorage.setItem("isDeleting", "false");
		sessionStorage.clear();
		logout();
		hideDropdown();
		navigate("/");
	};

	return (
		<div
			className={`hidden  h-fit fixed bg-white z-999 max-[768px]:block ${
				isDropdownVisible ? "max-[768px]:block" : "max-[768px]:hidden"
			} ${
				isDropdownVisible ? "min-[768px]:block" : "min-[768px]:hidden"
			} min-[768px]:w-[200px] max-[768px]:w-full min-[768px]:top-17 min-[768px]:right-[20px] min-[768px]:rounded-b-[4px] min-[1080px]:right-[90px]`}>
			<ul>
				{menuList.map((menu, index) => (
					<li
						key={index}
						className="text-[#3a3541] font-normal px-3 py-3 border-b border-[#3a35411f] cursor-pointer">
						<a onClick={(e) => handleClick(e)}>{menu}</a>
					</li>
				))}
				<li
					className="flex items-center gap-x-[5px] px-3 py-3 border-b border-[#3a35411f] cursor-pointer"
					onClick={handleLogout}>
					<a className="text-[#ff4b4b] font-bold">Keluar</a>
					<img src={exitIcon} alt="Exit" className="block" />
				</li>
			</ul>
		</div>
	);
};

export default DropdownUser;
