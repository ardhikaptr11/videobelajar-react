import PropTypes from "prop-types";
import styles from "./SocialLink.module.css";
import { IonIcon } from "@ionic/react";
import { logoLinkedin, logoTwitter, logoFacebook, logoInstagram } from "ionicons/icons";

const setIcon = (iconName) => {
	if (iconName === "linkedin") return logoLinkedin;
	if (iconName === "twitter") return logoTwitter;
	if (iconName === "facebook") return logoFacebook;
	if (iconName === "instagram") return logoInstagram;
};

const SocialLink = ({ iconNames }) => {
	return (
		<div className={styles.socialLink}>
			{iconNames.map((iconName, index) => (
				<a key={index} href="#" target="_blank" rel="noreferrer">
					<IonIcon icon={setIcon(iconName)} className={styles.icon} />
				</a>
			))}
		</div>
	);
};

SocialLink.propTypes = {
	iconNames: PropTypes.array.isRequired
};

export default SocialLink;
