import { useState } from "react";
import PropTypes from "prop-types";
import { StyledTab, StyledTabs } from "@components/Molecules/StyledComponent/StyledComponent";
import Box from "@mui/material/Box";

const TabsWithIndicator = ({ categories }) => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box>
				<StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example">
					{categories.map((category, index) => (
						<StyledTab key={index} label={category} />
					))}
				</StyledTabs>
			</Box>
		</Box>
	);
};

TabsWithIndicator.propTypes = {
	categories: PropTypes.array.isRequired
};

export default TabsWithIndicator;
