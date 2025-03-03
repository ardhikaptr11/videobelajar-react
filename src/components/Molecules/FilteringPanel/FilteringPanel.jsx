import { useState } from "react";
import CollapsibleAccordion from "@components/Molecules/CollapsibleAccordion/CollapsibleAccordion";

// Import image assets
import categoryIcon from "@assets/categoryIcon.png";
import priceIcon from "@assets/priceIcon.png";
import calendarIcon from "@assets/calendarIcon.png";

const accordionProps = [
	{
		title: "Bidang Studi",
		type: "multiple",
		icon: categoryIcon,
		items: [
			{ value: "marketing", label: "Pemasaran" },
			{ value: "digitech", label: "Digital & Teknologi" },
			{ value: "selfdev", label: "Pengembangan Diri" },
			{ value: "business", label: "Bisnis Manajemen" }
		]
	},
	{
		title: "Harga",
		type: "single",
		icon: priceIcon,
		items: [
			{ value: "free", label: "Gratis" },
			{ value: "low", label: "99k - 199k" },
			{ value: "mid", label: "200k - 399k" },
			{ value: "high", label: "400k - 599k" }
		]
	},
	{
		title: "Durasi",
		type: "single",
		icon: calendarIcon,
		items: [
			{ value: "lt-4", label: "Kurang dari 4 jam" },
			{ value: "gt4-lt8", label: "4-8 jam" },
			{ value: "gt-8", label: "Lebih dari 8 jam" }
		]
	}
];

const FilterPanel = () => {
	const [isReset, setIsReset] = useState(false);

	return (
		<aside className="flex flex-col gap-y-4 p-5 w-full h-fit border border-solid border-[#3a35411f] rounded-[10px] min-[992x]:max-w-[365px]">
			<div className="flex justify-between items-center">
				<p className="font-semibold text-[18px]/[21.6px] font-poppins text-[#333333ad]">Filter</p>
				<p
					className="text-base/[22.4px] text-[#ff5c2b] font-medium font-button tracking-[0.0125rem] cursor-pointer"
					onClick={() => setIsReset((prev) => !prev)}>
					Reset
				</p>
			</div>
			<div className="flex flex-col gap-y-4 h-fit">
				{accordionProps.map((accordionProp, index) => (
					<CollapsibleAccordion
						key={index}
						data={accordionProp}
						for="filtering"
						isReset={isReset}
						setIsReset={setIsReset}
					/>
				))}
			</div>
		</aside>
	);
};

export default FilterPanel;
