import InstructorInfo from "@components/Atoms/InstructorInfo/InstructorInfo";

const Instructor = ({ ...instructors }) => {
	const instructor = instructors[0];
	const { avatar, name, job, company } = instructor;

	return (
		<div className="flex items-center gap-2">
			<img src={avatar} alt={name} className="size-[36px] rounded-[10px]" />
			<InstructorInfo name={name} job={job} company={company} />
		</div>
	);
};

export default Instructor;
