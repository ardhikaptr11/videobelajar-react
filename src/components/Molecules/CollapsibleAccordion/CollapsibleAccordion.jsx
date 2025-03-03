import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import chevronGreen from "@assets/chevron-down-green.svg";
import CheckboxGroup from "@components/Molecules/CheckboxGroup/CheckboxGroup";
import RadioButtonGroup from "@components/Molecules/RadioButtonGroup/RadioButtonGroup";
import Submodule from "@components/Atoms/Submodule/Submodule";

const setReturnComponent = (props) => {
	switch (props.for) {
		case "filtering":
			return props.data.type === "multiple" ? (
				<CheckboxGroup
					items={props.data.items}
					selected={props.selected.value}
					setSelected={props.handleSelection}
				/>
			) : (
				<RadioButtonGroup
					items={props.data.items}
					category={`${props.data.title === "Durasi" ? "duration" : "price"}`}
					selected={props.selected.value}
					setSelected={props.handleSelection}
				/>
			);
		default:
			return props.data.submodules.map((submodule, index) => <Submodule key={index} {...submodule} />);
	}
};

const CollapsibleAccordion = ({ isReset = null, setIsReset = null, ...props }) => {
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState({
		type: props.data.type,
		value: props.data.type === "multiple" ? [] : ""
	});

	const handleSelection = (newValue) =>
		setSelected((prev) => ({
			...prev,
			value:
				prev.type === "multiple"
					? prev.value.includes(newValue)
						? prev.value.filter((item) => item !== newValue)
						: [...prev.value, newValue]
					: newValue // for radio button
		}));

	useEffect(() => {
		if (isReset) {
			setSelected({ type: props.data.type, value: props.data.type === "multiple" ? [] : "" });
			setIsReset && setIsReset(false);
		}
	}, [props.data.type, isReset, setIsReset]);

	const propObj = { ...props, selected, handleSelection };

	return (
		<section
			className={`w-full flex flex-col gap-y-4.5 ${
				props.for === "filtering" ? "p-[12px_16px] border border-solid border-[#3a35411f]" : "p-0"
			} rounded-[10px]`}>
			<div className="flex items-center justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
				<div className="flex gap-x-[15px] items-center">
					{props.for === "filtering" ? (
						<>
							<img src={props.data.icon} alt="Category Icon" className="w-5  h-5" />
							<h3 className="text-[#3ecf4c]">{props.data.title}</h3>
						</>
					) : (
						<h3 className="font-poppins text-base/[19.2px] font-semibold text-[#3ecf4c] tracking-normal min-[992px]:text-[1.125em]/[21.6px] max-[576px]:line-clamp-1 text-ellipsis">
							{props.data.name}
						</h3>
					)}
				</div>
				<img
					src={chevronGreen}
					alt="Chevron Down"
					className={`${isActive ? "transform-[rotate(180deg)]" : "transform-[rotate(0deg)]"}`}
				/>
			</div>
			{isActive && setReturnComponent(propObj)}
		</section>
	);
};

CollapsibleAccordion.propTypes = {
	data: PropTypes.object.isRequired,
	icon: PropTypes.string,
	for: PropTypes.string,
	isReset: PropTypes.bool,
	setIsReset: PropTypes.func
};

export default CollapsibleAccordion;
