import PropTypes from "prop-types";
import brandLogo from "@assets/videobelajar-logo.png";

const CompanyProfile = ({ companyInfo }) => {
	return (
		<div className="flex flex-col gap-y-2 h-fit">
			<div className="flex flex-col gap-y-4">
				<a className="h-[30px] inline-block items-center">
					<img src={brandLogo} alt="Brand logo" className="h-full"/>
				</a>
				<p className="text-base/[19.6px] tracking-[0.0125rem] font-bold text-[#222325]">
					{companyInfo.tagline}
				</p>
			</div>
			<p className="text-base/[19.6px] font-normal tracking-[0.0125rem]">
				{companyInfo.address}
			</p>
			<p className="text-base/[19.6px] font-normal tracking-[0.0125rem]">
				+{companyInfo.contact}
			</p>
		</div>
	);
};

CompanyProfile.propTypes = {
	companyInfo: PropTypes.object.isRequired
};

export default CompanyProfile;
