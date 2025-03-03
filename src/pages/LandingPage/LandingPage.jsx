import { Suspense } from "react";
import { Spin } from "antd";

import Heroku from "@components/Molecules/Heroku/Heroku";
import Heading from "@components/Molecules/Heading/Heading";
import CourseList from "@components/Molecules/CourseList/CourseList";
import Newsletter from "@components/Molecules/NewsLetter/Newsletter";
import Course from "@components/Organisms/Course/Course";
import TabsWithIndicator from "@components/Molecules/TabsWithIndicator/TabsWithIndicator";
import courses from "../../data";

const LandingPage = () => {
	return (
		<Suspense fallback={<Spin />}>
			<Heroku
				tagline="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
				description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi.Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
				courses={courses}
				position="front-page"
			/>
			<Course>
				<Heading
					headingText="Koleksi Video Pembelajaran Unggulan"
					childText="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
				/>
				<TabsWithIndicator categories={["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"]} />
				<CourseList courses={courses} />
			</Course>
			<Newsletter
				headingText="Mau Belajar Lebih Banyak?"
				childText="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
			/>
		</Suspense>
	);
};

export default LandingPage;
