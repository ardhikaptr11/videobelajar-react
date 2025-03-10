import slugify from "@sindresorhus/slugify";

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
			title: "UI/UX Design",
			tagline: "Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["1"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["1"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["1"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["1"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction: Foundations of User Experience Design",
						submodules: [
							{
								name: "The basics of user experience design",
								duration: 12 // in minutes
							},
							{
								name: "Jobs in the field of user experience",
								duration: 12
							},
							{
								name: "The product development life cycle",
								duration: 12
							}
						]
					},
					{
						name: "Universal design, inclusive design, and equity-focused design",
						submodules: [
							{
								name: "The basics of user experience design",
								duration: 12
							},
							{
								name: "Jobs in the field of user experience",
								duration: 12
							},
							{
								name: "The product development life cycle",
								duration: 12
							}
						]
					},
					{
						name: "Introduction to design sprints",
						submodules: [
							{
								name: "The basics of user experience design",
								duration: 12
							},
							{
								name: "Jobs in the field of user experience",
								duration: 12
							},
							{
								name: "The product development life cycle",
								duration: 12
							}
						]
					},
					{
						name: "Introduction to UX research",
						submodules: [
							{
								name: "The basics of user experience design",
								duration: 12
							},
							{
								name: "Jobs in the field of user experience",
								duration: 12
							},
							{
								name: "The product development life cycle",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 199,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["2"],
		courseInfo: {
			title: "Big 4 Auditor Financial Analyst",
			tagline: "Gapai Karier Impianmu sebagai Auditor Financial Analyst.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["2"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 2 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["2"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["2"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["2"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 599,
		isDiscount: true,
		discountedPrice: 99
	},
	{
		coverImage: coverImages["3"],
		courseInfo: {
			title: "Frontend with ReactJS",
			tagline: "Gapai Karier Impianmu sebagai Front End Web Developer dengan ReactJS.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["3"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 3 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["3"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["1"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["1"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: true,
		discountedPrice: 100
	},
	{
		coverImage: coverImages["4"],
		courseInfo: {
			title: "Python for Data Science",
			tagline: "Gapai Karier Impianmu sebagai Seorang Data Scientist.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["4"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 4 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["4"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["4"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["4"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["5"],
		courseInfo: {
			title: "ML/AI Career Path",
			tagline: "Gapai Karier Impianmu sebagai Seorang ML/AI Engineer.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["5"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 5 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["5"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["5"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["5"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["6"],
		courseInfo: {
			title: "Backend with Golang",
			tagline: "Gapai Karier Impianmu sebagai Seorang Backend Developer dengan Golang.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["6"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 6 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["6"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["6"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["6"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["7"],
		courseInfo: {
			title: "Mastering Cloud Computing",
			tagline: "Gapai Karier Impianmu sebagai Seorang Cloud Engineer.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["7"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 7 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["7"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["7"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["7"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["8"],
		courseInfo: {
			title: "Cyber Security Fundamentals",
			tagline: "Gapai Karier Impianmu sebagai Seorang Cyber Security Engineer.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["8"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 8 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["8"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["8"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["8"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 899,
		isDiscount: false,
		discountedPrice: 0
	},
	{
		coverImage: coverImages["9"],
		courseInfo: {
			title: "Computer Vision with YOLO V5",
			tagline: "Gapai Karier Impianmu sebagai Seorang CV Engineer.",
			category: "Digital Technology",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem dignissim mattis tristique elementum. Sit consequat turpis orci vel. Diam aenean mattis hac vitae, orci sed pretium pretium. Sit ut cursus adipiscing vestibulum, ac nibh. Viverra quis at quis suscipit. Fermentum duis duis porttitor amet diam sed ultrices condimentum dolor. Imperdiet dictum sapien porta faucibus viverra cum massa nec. Eget risus turpis viverra massa ullamcorper.",
			instructors: [
				{
					avatar: instructorAvatars["9"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 9 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				},
				{
					avatar: instructorAvatars["9"],
					name: "Jenna Ortega",
					careerBackground:
						"Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja sebagai Senior Talent Acquisition Specialist di Wings Group Indonesia (Sayap Mas Utama) selama hampir 1 tahun.",
					job: "Senior Accountant",
					company: "Gojek"
				}
			],
			alumni: [
				{
					// Using the same avatar as the instructor (for development only)
					avatar: instructorAvatars["9"],
					name: "Gregorius Edrik Lewanto",
					batch: "Batch 2",
					givenReview:
						"Kursus ini memberikan pengenalan yang komprehensif tentang desain UI/UX. Instruktur sangat berpengetahuan dan materi disusun dengan baik. Sangat direkomendasikan untuk pemula!",
					givenRating: 4.6
				},
				{
					avatar: instructorAvatars["9"],
					name: "Arief Yusron",
					batch: "Batch 4",
					givenReview:
						"Kursus ini mencakup konsep dasar UI/UX dengan jelas dan terstruktur. Meskipun materinya informatif, beberapa topik bisa dibahas lebih mendalam. Pilihan yang bagus untuk pemula!",
					givenRating: 4.3
				}
			],
			features: {
				totalDocuments: 7,
				totalVideos: 42,
				hasCertificate: true,
				modules: [
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					},
					{
						name: "Introduction to HR",
						submodules: [
							{
								name: "Introduction to HR",
								duration: 12 // in minutes
							},
							{
								name: "Introduction to HR",
								duration: 12
							},
							{
								name: "Introduction to HR",
								duration: 12
							}
						]
					}
				],
				featuredLanguage: "Bahasa Indonesia"
			}
		},
		rating: 3.5,
		totalReviews: 86,
		price: 300,
		isDiscount: false,
		discountedPrice: 0
	}
];

courses
	.filter((course) => course.isDiscount === true)
	.forEach((c) => {
		c.totalDiscount = Math.floor(((c.price - c.discountedPrice) / c.price) * 100);
	});

courses.forEach((course) => {
	course.slugName = slugify(course.courseInfo.title, { separator: "-", lowercase: true });
});

export default courses;
