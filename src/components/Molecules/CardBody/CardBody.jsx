import PropTypes from "prop-types";
import styles from "./CardBody.module.css";
import CourseInfo from "../CourseInfo/CourseInfo";

const CardBody = ({ coverImage, courseInfo }) => {
    return (
        <div className={styles.courseDetails}>
            <img src={coverImage} alt="Course cover image" className={styles.coverImg} />
            <CourseInfo {...courseInfo} />
        </div>
    );
}

CardBody.propTypes = {
    coverImage: PropTypes.string.isRequired,
    courseInfo: PropTypes.object.isRequired
}

export default CardBody;