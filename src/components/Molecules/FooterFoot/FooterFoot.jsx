import PropTypes from "prop-types";
import SocialLink from "@components/Atoms/SocialLink/SocialLink";

const FooterFoot = ({ license, socials }) => {
	return (
		<div className="min-[1200px]:flex min-[1200px]:justify-between min-[1200px]:items-center">
			<SocialLink iconNames={socials} />
			<p className="text-base/[22.4px] font-medium tracking-[0.0125em] min-[1200px]:order-1">
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
