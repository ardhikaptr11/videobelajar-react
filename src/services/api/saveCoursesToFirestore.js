import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";

export const saveCoursesToFirestore = async (courses) => {
	try {
		const coursePromises = courses.map(async (course, index) => {
			const courseRef = doc(db, "courses", `videobelajar-course-${index + 1}`);
			const courseId = courseRef.id;

			await setDoc(courseRef, {
				coverImage: course.coverImage,
				courseInfo: {
					title: course.courseInfo.title,
					description: course.courseInfo.description,
					category: course.courseInfo.category,
					tagline: course.courseInfo.tagline,
					slug: course.slugName,
					rating: course.rating,
					price: course.price,
					isDiscount: course.isDiscount,
					discountedPrice: course.discountedPrice,
					totalReviews: course.totalReviews,
					...(course.isDiscount && { totalDiscount: course.totalDiscount })
				}
			});

			const instructorPromises = course.courseInfo.instructors.map((instructor, i) => {
				const instructorRef = doc(db, "courses", courseId, "instructors", `instructor-${i + 1}`);
				return setDoc(instructorRef, {
					avatar: instructor.avatar,
					name: instructor.name,
					careerBackground: instructor.careerBackground,
					job: instructor.job,
					company: instructor.company
				});
			});

			const alumniPromises = course.courseInfo.alumni.map((alumnus, i) => {
				const alumniRef = doc(db, "courses", courseId, "alumni", `alumnus-${i + 1}`);
				return setDoc(alumniRef, {
					avatar: alumnus.avatar,
					name: alumnus.name,
					batch: alumnus.batch,
					givenReview: alumnus.givenReview,
					givenRating: alumnus.givenRating
				});
			});

			const featuresRef = doc(db, "courses", courseId, "features", `${courseId}-features`);
			await setDoc(featuresRef, {
				totalDocuments: course.courseInfo.features.totalDocuments,
				totalVideos: course.courseInfo.features.totalVideos,
				hasCertificate: course.courseInfo.features.hasCertificate,
				featuredLanguage: course.courseInfo.features.featuredLanguage
			});

			const modulePromises = course.courseInfo.features.modules.map(async (module, i) => {
				const moduleRef = doc(
					db,
					"courses",
					courseId,
					"features",
					`${courseId}-features`,
					"modules",
					`module-${i + 1}`
				);
				await setDoc(moduleRef, { name: module.name });

				const submodulePromises = module.submodules.map((submodule, j) => {
					const submoduleRef = doc(
						db,
						"courses",
						courseId,
						"features",
						`${courseId}-features`,
						"modules",
						`module-${i + 1}`,
						"submodules",
						`submodule-${j + 1}`
					);
					return setDoc(submoduleRef, {
						name: submodule.name,
						duration: submodule.duration
					});
				});

				await Promise.all(submodulePromises);
			});

			await Promise.all([...instructorPromises, ...alumniPromises, ...modulePromises]);
		});

		await Promise.all(coursePromises);
	} catch (error) {
		console.error("Error adding document: ", error);
	}
};

export default saveCoursesToFirestore;
