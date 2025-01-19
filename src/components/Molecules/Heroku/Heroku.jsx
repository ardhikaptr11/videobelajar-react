import Button from "@components/Atoms/Button/Button";
import styles from "./Heroku.module.css";
import PropTypes from "prop-types";

const Heroku = ({ tagline, description }) => {
	return (
		<section className={styles.heroku}>
			<h3>{tagline}</h3>
			<p>{description}</p>
			<Button type="button" id="explore" text="Temukan Video Course untuk Dipelajari!" />
		</section>
	);
};

Heroku.propTypes = {
	tagline: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Heroku;
