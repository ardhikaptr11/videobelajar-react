import { useState } from "react";
import { useNavigate } from "react-router";

import storeDropdown from "@store/storeDropdown";
import ActionButtonGroup from "@components/Molecules/ActionButtonGroup/ActionButtonGroup";

const DropdownGuest = () => {
	const isDropdownVisible = storeDropdown((state) => state.isDropdownVisible);
	const navigate = useNavigate();

	const [isHomeClicked, setIsHomeClicked] = useState(false);
	const [isCategoryClicked, setIsCategoryClicked] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();

		if (e.target.textContent === "Beranda") {
			setIsHomeClicked(true);
			setIsCategoryClicked(false);
			navigate("/");
		} else {
			setIsCategoryClicked(true);
			setIsHomeClicked(false);
			navigate("/categories");
		}
	};

	return (
		<div
			className={`hidden w-full h-[200px] fixed bg-white max-[768px]:block ${
				isDropdownVisible ? "max-[768px]:block" : "max-[768px]:hidden"
			} z-999`}>
			<ul>
				<li
					className={`${
						isHomeClicked ? "text-[#3ecf4c]" : "text-[#333333ad]"
					} text-base/[22.4px] hover:text-[#3ecf4c] font-medium hover:font-bold font-dropdown px-3 py-3 border-b border-[#3a35311f] cursor-pointer`}
					onClick={(e) => handleClick(e)}>
					<a>Beranda</a>
				</li>
				<li
					className={`${
						isCategoryClicked ? "text-[#3ecf4c]" : "text-[#333333ad]"
					} text-base/[22.4px] hover:text-[#3ecf4c] font-medium hover:font-bold font-dropdown px-3 py-3 border-b border-[#3a35411f] cursor-pointer`}
					onClick={(e) => handleClick(e)}>
					<a>Kategori</a>
				</li>
			</ul>
			<ActionButtonGroup />
		</div>
	);
};

export default DropdownGuest;
