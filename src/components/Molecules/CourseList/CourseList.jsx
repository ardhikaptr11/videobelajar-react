import CourseCard from "../CourseCard/CourseCard";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => {
    return (
        <div className="flex flex-wrap gap-6 justify-start">
            {courses.map((course, index) => (
                <CourseCard key={index} course={course} />
            ))}
        </div>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CourseList;