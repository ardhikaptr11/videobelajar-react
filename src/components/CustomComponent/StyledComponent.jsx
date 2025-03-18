import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const StyledTabs = styled((props) => (
	<Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
	"& .MuiTabs-flexContainer": {
		whiteSpace: "nowrap",
		overflowX: "auto"
	},
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		maxWidth: 50,
		width: "100%",
		height: 5,
		borderRadius: "10px",
		backgroundColor: "#ff5733"
	}
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
	textTransform: "none",
	fontWeight: theme.typography.fontWeightRegular,
	fontSize: theme.typography.pxToRem(16),
	color: "#000",
	"&.MuiTab-root": {
		padding: "14px 0",
		marginRight: "10px",
		minWidth: 0,
		textAlign: "start"
	},
	"&.Mui-selected": {
		color: "#ff5733"
	},
	"&.Mui-focusVisible": {
		backgroundColor: "rgba(100, 95, 228, 0.32)"
	}
}));

export { StyledTabs, StyledTab };
