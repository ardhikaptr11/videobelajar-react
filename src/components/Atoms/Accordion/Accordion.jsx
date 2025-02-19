import PropTypes from "prop-types";
import chevronForward from "@assets/chevron-forward.png";

const Accordion = ({ title, itemList }) => {
	return (
		<div className="flex justify-between items-center mt-3 cursor-pointer min-[1200px]:cursor-text group min-[1200px]:block min-[1200px]:mt-0 min-[1200px]:nth-2:col-start-2 min-[1200px]:nth-2:row-start-1 min-[1200px]:mr-12 min-[1200px]:last:mr-0">
			<p className="font-black text-base/[22.4px] tracking-[0.0125em] text-[#222325]">{title}</p>
			<img
				src={chevronForward}
				alt="Navigation"
				className="w-[7.5px] h-3 transition-transform duration-200 group-hover:translate-x-2 min-[1200px]:hidden"
			/>
			<ul className="hidden min-[1200px]:block">
				{itemList.map((item, index) => (
					<li
						key={index}
						className="w-fit cursor-pointer hover:text-[#333333] hover:transform-[scale(1.05)] min-[1200px]:first:mt-[15px] min-[1200px]:mb-[13px] min-[1200px]:last:mb-0">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string.isRequired,
	itemList: PropTypes.array.isRequired
};

export default Accordion;
