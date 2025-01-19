import PropTypes from "prop-types";
import styles from "./CompanyProfile.module.css";
import brandLogo from "@assets/videobelajar-logo.png";
import "@components/style.css";

const CompanyProfile = ({ companyInfo }) => {
	return (
		<div className={styles.companyProfile}>
			<a className="navbarBrand footer">
				<img src={brandLogo} alt="Brand logo" />
			</a>
			<p className={styles.tagline}>{companyInfo.tagline}</p>
			<p className={styles.companyAddress}>{companyInfo.address}</p>
			<p className={styles.companyContact}>+{companyInfo.contact}</p>
		</div>
	);
};

CompanyProfile.propTypes = {
	companyInfo: PropTypes.object.isRequired
};

export default CompanyProfile;
