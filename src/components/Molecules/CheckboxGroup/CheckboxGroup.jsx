import PropTypes from "prop-types";

import CheckboxWithLabel from "@components/Molecules/CheckboxWithLabel/CheckboxWithLabel";

const CheckboxGroup = ({ selected, setSelected, ...props }) => {

	return (
		<div className="flex flex-col gap-4 w-fit accordion-content">
			{props.items.map((item) => (
				<CheckboxWithLabel 
					name={`category-${item.value}`}
					key={item.value}
					value={item.value}
					label={item.label}
					checked={selected.includes(item.value)}
					onChange={() => setSelected(item.value)}
				/>
			))}
		</div>
	);
};

CheckboxGroup.propTypes = {
	items: PropTypes.array.isRequired,
	selected: PropTypes.array.isRequired,
	setSelected: PropTypes.func.isRequired
};

export default CheckboxGroup;
