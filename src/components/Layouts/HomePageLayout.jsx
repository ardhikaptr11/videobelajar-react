import { Outlet } from "react-router";

import MainNavbar from "@components/Molecules/Navbar/MainNavbar";
import FooterContent from "@components/Molecules/FooterContent/FooterContent";
import FooterBody from "@components/Molecules/FooterBody/FooterBody";
import FooterFoot from "@components/Molecules/FooterFoot/FooterFoot";
import DropdownMenu from "@components/Molecules/DropdownMenu/DropdownMenu";

const HomePageLayout = () => {
	return (
		<>
			<header className="flex items-center fixed w-full top-0 z-999 bg-white shadow-md p-[12px_90px] h-[70px] max-[1079px]:p-[12px_20px]">
				<MainNavbar />
			</header>
			<DropdownMenu />
			<main className="m-[70px_auto_0] p-[28px_20px] min-[1080px]:p-[28px_90px]">
				<Outlet />
			</main>
			<footer className="p-5 min-[1080px]:p-[28px_90px]">
				<FooterContent>
					<FooterBody
						companyInfo={{
							tagline: "Gali Potensi Anda Melalui Pembelajaran Video di videobelajar.id!",
							address: "Jl. Usman Effendi No. 50 Lowokwaru, Malang",
							contact: "62-877-7123-1234"
						}}
					/>
					<hr className="h-px border-1 border-solid border-[#3a354133]" />
					<FooterFoot
						license={{ year: new Date().getFullYear(), company: "Videobelajar" }}
						socials={["linkedin", "facebook", "instagram", "twitter"]}
					/>
				</FooterContent>
			</footer>
		</>
	);
};

export default HomePageLayout;
