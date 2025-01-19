import styles from "./FooterFoot.module.css";
import PropTypes from "prop-types";
import SocialLink from "@components/Atoms/SocialLink/SocialLink";

const FooterFoot = ({ license, socials }) => {
	return (
		<div className={styles.footerFoot}>
			<SocialLink iconNames={socials} />
			<p className={styles.licensing}>
				@{license.year} {license.company} All Right Reserved.
			</p>
		</div>
	);
};

FooterFoot.propTypes = {
	socials: PropTypes.array.isRequired,
	license: PropTypes.object.isRequired
};

export default FooterFoot;
