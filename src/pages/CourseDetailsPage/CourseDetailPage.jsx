import { useState, useEffect } from "react";
import { useParams } from "react-router";

import Heroku from "@components/Molecules/Heroku/Heroku";
import DetailsWrapper from "@components/Organisms/DetailsWrapper/DetailsWrapper";
import DetailsContent from "@components/Molecules/DetailsContent/DetailsContent";
import PurchasingPanel from "@components/Molecules/PurchasingPanel/PurchasingPanel";
import Breadcrumb from "@components/Atoms/Breadcrumb/Breadcrumb";
import CourseList from "@components/Molecules/CourseList/CourseList";

import { CustomSpinner } from "../../components/CustomComponent/CustomSpinner";
import { fetchCourseData } from "@api/courses/fetchCourseData";

const CourseDetailsPage = () => {
	const { slug } = useParams();
	const [course, setCourse] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);

		const fetchData = async () => {
			try {
				const courseData = await fetchCourseData(slug);
				setCourse(courseData);
			} catch (error) {
				console.error("❌ Error fetching course:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [slug]);

	return loading ? (
		<CustomSpinner text="Loading" />
	) : (
		<>
			<Breadcrumb category={course.courseInfo.category} title={course.courseInfo.title} />
			<Heroku course={course} position="details-page" />
			<DetailsWrapper>
				<DetailsContent course={course} />
				<PurchasingPanel course={course} />
			</DetailsWrapper>
			<section className="flex flex-col gap-y-6 mt-9">
				<div className="w-fit">
					<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
						Video Pembelajaran Terkait Lainnya
					</h5>
					<p>Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!</p>
				</div>
				<CourseList courses={course.similarCourses} />
			</section>
		</>
	);
};

export default CourseDetailsPage;
