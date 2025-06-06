import PropTypes from "prop-types";

import Card from "@components/Atoms/Card/Card";
import CollapsibleAccordion from "@components/Molecules/CollapsibleAccordion/CollapsibleAccordion";

const DetailsContent = ({ course }) => {
	const instructors = course.instructors;
	const alumni = course.alumni;

	return (
		<article className="flex flex-col gap-y-6 w-full order-2 min-[992px]:order-1">
			<section className="flex flex-col gap-y-6 p-5 border border-solid border-[#3a35411f] rounded-[10px] min-[992px]:p-6">
				<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
					Deskripsi
				</h5>
				<p>{course.courseInfo.description}</p>
			</section>
			<section className="flex flex-col gap-y-6 p-5 border border-solid border-[#3a35411f] rounded-[10px] min-[992px]:p-6">
				<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
					Belajar Bersama Tutor Professional
				</h5>
				<div className="flex flex-col gap-y-4 min-[992px]:flex-row min-[992px]:gap-x-4">
					{instructors.map((instructor, index) => (
						<Card key={index} data={instructor} role="instructor" />
					))}
				</div>
			</section>
			<section className="flex flex-col gap-y-6 p-5 border border-solid border-[#3a35411f] rounded-[10px] min-[992px]:p-6">
				<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
					Kamu akan Mempelajari
				</h5>
				{course.modules.map((module) => (
					<CollapsibleAccordion key={module.id} data={module} for="module" />
				))}
			</section>
			<section className="flex flex-col gap-y-6 p-5 border border-solid border-[#3a35411f] rounded-[10px] min-[992px]:p-6">
				<h5 className="w-fit font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal min-[992px]:text-[1.25em]/[24px]">
					Rating dan Review
				</h5>
				<div className="flex flex-col gap-y-4 min-[992px]:flex-row min-[992px]:gap-x-4">
					{alumni.map((alumnus, index) => (
						<Card key={index} data={alumnus} role="alumni" />
					))}
				</div>
			</section>
		</article>
	);
};

DetailsContent.propTypes = {
	course: PropTypes.object.isRequired
};

export default DetailsContent;
