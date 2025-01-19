// import Input from "@components/Atoms/Input/Input";
import styles from "./CountryCodeBox.module.css";
import indonesianFlag from "@assets/indonesian-flag.png";
import PropTypes from "prop-types";

const CountryCodeBox = ({ type, name, id, children, ...props }) => {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.countryFlag}>
					<img src={indonesianFlag} alt="Country Flag" />
				</div>
				{children}
			</div>
			<input type={type} name={name} className="input" id={id} {...props} />
		</>
	);
};

CountryCodeBox.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CountryCodeBox;
