import axios from "axios";

import { fetchInstructors } from "@api/fetchInstructors";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchCourses = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/courses`);
		const courses = response.data?.documents;

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

		return courseList;
	} catch (error) {
		console.error("❌ Error fetching courses:", error);
	}
};
