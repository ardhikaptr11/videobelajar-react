import { axiosClient } from "@client/axiosClient";

import { fetchInstructors } from "@api/courses/fetchInstructors";

export const fetchCourses = async () => {
	const cachedCourses = sessionStorage.getItem("courses");

	if (cachedCourses) return JSON.parse(cachedCourses);

	try {
		const response = await axiosClient.get("courses");

		if (!response.data) {
			throw new Error("❌ Error fetching courses.");
		}

		const courses = response.data.documents;

		const courseList = await Promise.all(
			courses.map(async (doc) => {
				const courseId = doc.name.split("/").pop();
				const instructors = await fetchInstructors(courseId);

				return {
					id: courseId,
					coverImage: doc.fields.coverImage.stringValue,
					courseInfo: {
						title: doc.fields.courseInfo.mapValue.fields.title.stringValue,
						slug: doc.fields.courseInfo.mapValue.fields.slug.stringValue,
						category: doc.fields.courseInfo.mapValue.fields.category.stringValue,
						description: doc.fields.courseInfo.mapValue.fields.description.stringValue,
						tagline: doc.fields.courseInfo.mapValue.fields.tagline.stringValue,
						rating: doc.fields.courseInfo.mapValue.fields.rating.doubleValue,
						isDiscount: doc.fields.courseInfo.mapValue.fields.isDiscount.booleanValue,
						price: Number(doc.fields.courseInfo.mapValue.fields.price.integerValue),
						discountedPrice: Number(doc.fields.courseInfo.mapValue.fields.discountedPrice.integerValue),
						totalReviews: Number(doc.fields.courseInfo.mapValue.fields.totalReviews.integerValue),
						...(doc.fields.courseInfo.mapValue.isDiscount && {
							totalDiscount: doc.fields.courseInfo.mapValue.fields.totalDiscount.integerValue
						})
					},
					instructors: instructors
				};
			})
		);

		sessionStorage.setItem("courses", JSON.stringify(courseList));

		return courseList;
	} catch (error) {
		console.error(error.message);
	}
};
