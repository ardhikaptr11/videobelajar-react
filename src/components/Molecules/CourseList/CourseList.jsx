import CourseCard from "../CourseCard/CourseCard";
import styles from "./CourseList.module.css";
import PropTypes from "prop-types";

const CourseList = ({ courses }) => {
    return (
        <div className={styles.courseList}>
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