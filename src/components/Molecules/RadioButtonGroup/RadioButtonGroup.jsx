// import { useState } from "react";
import PropTypes from "prop-types";

import RadioButtonWithLabel from "@components/Molecules/RadioButtonWithLabel/RadioButtonWithLabel";

const RadioButtonGroup = ({ selected, setSelected, ...props }) => {
	return (
		<div className="flex flex-col gap-4 w-fit accordion-content">
			{props.items.map((item) => (
				<RadioButtonWithLabel
					name={`${props.category === "duration" ? "duration" : "price"}`}
					key={item.value}
					value={item.value}
					label={item.label}
					selectedValue={selected}
					onChange={setSelected}
				/>
			))}
		</div>
	);
};

RadioButtonGroup.propTypes = {
	items: PropTypes.array.isRequired,
	category: PropTypes.string.isRequired,
	selected: PropTypes.string.isRequired,
	setSelected: PropTypes.func.isRequired
};

export default RadioButtonGroup;
