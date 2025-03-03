import PropTypes from "prop-types";

import playCircle from "@assets/play-circle.png";
import clockIcon from "@assets/clock-icon.png";

const Submodule = ({ name, duration }) => {
	return (
		<div className="block border border-solid border-[#3a35411f] rounded-[10px] p-[18px_12px] cursor-pointer min-[992px]:flex min-[992px]:justify-between min-[992px]:p-5">
			<p className="text-[0.875em]/[19.6px] text-[#222325] font-medium tracking-[0.0125em] min-[768px]:text-base/[22.4px]">
				{name}
			</p>
			<div className="hidden min-[992px]:flex min-[992px]:gap-x-4 min-[992px]:items-center">
				<div className="flex gap-x-2 items-center shrink-0">
					<img src={playCircle} alt="Playable Icon" className="w-6 h-6" />
					<p>Video</p>
				</div>
				<div className="flex gap-x-2 items-center shrink-0">
					<img src={clockIcon} alt="Playable Icon" className="w-6 h-6" />
					<p>{duration} Menit</p>
				</div>
			</div>
		</div>
	);
};

Submodule.propTypes = {
	name: PropTypes.string.isRequired,
	duration: PropTypes.number.isRequired
};

export default Submodule;
