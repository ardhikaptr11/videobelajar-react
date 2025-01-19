import CardBody from "../CardBody/CardBody";
import CardFooter from "../CardFooter/CardFooter";
import styles from "./CourseCard.module.css";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
    return (
        <div className={styles.courseCard}>
            <CardBody {...course} />
            <CardFooter {...course} />
        </div>
    );
}

CourseCard.propTypes = {
    course: PropTypes.object.isRequired
}

export default CourseCard;