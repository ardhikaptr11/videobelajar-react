import Course from "@components/Organisms/Course/Course";
import MainNavbar from "@components/Molecules/Navbar/MainNavbar";
import Heroku from "@components/Molecules/Heroku/Heroku";
import Heading from "@components/Molecules/Heading/Heading";
import CategoriesTab from "@components/Molecules/CategoriesTab/CategoriesTab";
import Newsletter from "@components/Molecules/NewsLetter/Newsletter";
import CourseList from "@components/Molecules/CourseList/CourseList";
import FooterContent from "@components/Molecules/FooterContent/FooterContent";
import FooterBody from "@components/Molecules/FooterBody/FooterBody";
import FooterFoot from "@components/Molecules/FooterFoot/FooterFoot";
import styles from "@components/Layouts/HomePageLayout.module.css";
import courses from "../../data";

const HomePageLayout = () => {
	return (
		<>
			<header className={styles.header}>
				<MainNavbar />
			</header>
			<main className="m-[70px_auto_0] p-[28px_20px] min-[1080px]:p-[28px_90px]">
				<Heroku
					tagline="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
					description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.
					Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan
					pemahaman Anda."
				/>
				<Course>
					<Heading
						headingText="Koleksi Video Pembelajaran Unggulan"
						childText="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
					/>
					<CategoriesTab categories={["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"]} />
					<CourseList courses={courses} />
				</Course>
				<Newsletter
					headingText="Mau Belajar Lebih Banyak?"
					childText="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
				/>
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
