import PropTypes from "prop-types";
import { ConfigProvider } from "antd";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const CustomSpinner = ({ text }) => {
	const theme = {
		token: {
			colorPrimary: "#3ecf4c",
			fontSize: 16
		}
	};

	return (
		<ConfigProvider theme={theme}>
			<Spin indicator={<LoadingOutlined />} size="large" tip={text}>
				<div
					style={{
						padding: 50,
						background: "rgba(0, 0, 0, 0.05)",
						borderRadius: 4
					}}
				/>
			</Spin>
		</ConfigProvider>
	);
};

CustomSpinner.propTypes = {
	text: PropTypes.string
};
