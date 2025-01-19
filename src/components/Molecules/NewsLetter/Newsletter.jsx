import SubscriptionField from "../SubscriptionField/SubscriptionField";
import styles from "./Newsletter.module.css";
import PropTypes from "prop-types";

const Newsletter = ({ headingText, childText }) => {
    return (
        <section className={styles.newsletter}>
            <h3>Newsletter</h3>
            <h3>{headingText}</h3>
            <p>{childText}</p>
            <SubscriptionField />
        </section>
    );
}

Newsletter.propTypes = {
    headingText: PropTypes.string.isRequired,
    childText: PropTypes.string.isRequired
}

export default Newsletter;
