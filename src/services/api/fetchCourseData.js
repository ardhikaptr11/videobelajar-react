import axios from "axios";

import { fetchCourseFeatures } from "@api/fetchCourseFeatures";
import { fetchCourseModules } from "@api/fetchCourseModules";
import { fetchInstructors } from "@api/fetchInstructors";
import { fetchAlumni } from "@api/fetchAlumni";
import { fetchSimilarCourses } from "@api/fetchSimilarCourses";

const BASE_URL =
	import.meta.env.VITE_DEV === "true"
		? import.meta.env.VITE_FIREBASE_BASE_URL_DEV
		: import.meta.env.VITE_FIREBASE_BASE_URL_PROD;

export const fetchCourseData = async (slug) => {
	const requestBody = {
		structuredQuery: {
			from: [{ collectionId: "courses" }],
			where: {
				fieldFilter: {
					field: { fieldPath: "courseInfo.slug" },
					op: "EQUAL",
					value: { stringValue: `${slug}` }
				}
			}
		}
	};

	try {
		const response = await axios.post(`${BASE_URL}:runQuery`, requestBody, {
			headers: {
				"Content-Type": "application/json"
			}
		});

		const course = response.data[0].document;
		const courseId = course.name.split("/").pop();
		const doc = course.fields;

		const features = await fetchCourseFeatures(courseId);
		const modules = await fetchCourseModules(courseId);
		const instructors = await fetchInstructors(courseId);
		const alumni = await fetchAlumni(courseId);
		const similarCourses = await fetchSimilarCourses(slug);

		return {
			id: courseId,
			coverImage: doc.coverImage.stringValue,
			courseInfo: {
				title: doc.courseInfo.mapValue.fields.title.stringValue,
				slug: doc.courseInfo.mapValue.fields.slug.stringValue,
				category: doc.courseInfo.mapValue.fields.category.stringValue,
				description: doc.courseInfo.mapValue.fields.description.stringValue,
				tagline: doc.courseInfo.mapValue.fields.tagline.stringValue,
				rating: doc.courseInfo.mapValue.fields.rating.doubleValue,
				isDiscount: doc.courseInfo.mapValue.fields.isDiscount.booleanValue,
				price: Number(doc.courseInfo.mapValue.fields.price.integerValue),
				discountedPrice: Number(doc.courseInfo.mapValue.fields.discountedPrice.integerValue),
				totalReviews: Number(doc.courseInfo.mapValue.fields.totalReviews.integerValue),
				...(doc.courseInfo.mapValue.fields.isDiscount.booleanValue && {
					totalDiscount: Number(doc.courseInfo.mapValue.fields.totalDiscount.integerValue)
				})
			},
			features: features,
			modules: modules,
			instructors: instructors,
			alumni: alumni,
			similarCourses: similarCourses
		};
	} catch (error) {
		console.error("❌ Error fetching course:", error);
	}
};
