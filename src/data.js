const coverImageContext = import.meta.glob("@assets/course-*.jpeg", { eager: true });

const coverImages = Object.fromEntries(
	Object.entries(coverImageContext).map(([path, module]) => {
		const key = path.match(/course-(\d+)\.jpeg$/)?.[1];
		return [key, module.default];
	})
);

const instructorAvatarContext = import.meta.glob("@assets/instructor-avatar-*.png", { eager: true });
const instructorAvatars = Object.fromEntries(
	Object.entries(instructorAvatarContext).map(([path, module]) => {
		const key = path.match(/instructor-avatar-(\d+)\.png$/)?.[1];
		return [key, module.default];
	})
);

const courses = [
	{
		coverImage: coverImages["1"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["1"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["2"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["2"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["3"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["3"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["4"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["4"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["5"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["5"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["6"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["6"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["7"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["7"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["8"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["8"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	},
	{
		coverImage: coverImages["9"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			description:
				"Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik",
			instructor: {
				avatar: instructorAvatars["9"],
				name: "Jenna Ortega",
				job: "Senior Accountant"
			}
		},
		rating: 4.5,
		totalReviews: 86,
		price: 300
	}
];

export default courses;
