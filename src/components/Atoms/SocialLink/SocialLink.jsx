import PropTypes from "prop-types";
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
		<div className="mb-3 w-fit min-[1200px]:order-2 min-[1200px]:mb-0">
			{iconNames.map((iconName, index) => (
				<a key={index} href="/" target="_blank" rel="noreferrer" className="inline-flex items-center p-2 rounded-[50%] border-[1.5px] border-solid border-[#222325] ml-4 first:ml-0">
					<IonIcon icon={setIcon(iconName)} className="text-[1.25em] text-[#222325]" />
				</a>
			))}
		</div>
	);
};

SocialLink.propTypes = {
	iconNames: PropTypes.array.isRequired
};

export default SocialLink;
