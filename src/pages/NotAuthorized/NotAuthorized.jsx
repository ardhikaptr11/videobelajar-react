import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const NotAuthorized = () => {
	const navigate = useNavigate();

	return (
		<div className="flex justify-center items-center h-screen">
			<Result
				status="403"
				title="403"
				subTitle="Kamu tidak punya akses ke halaman ini, silahkan login terlebih dahulu"
				extra={
					<Button type="primary" variant="solid" color="cyan" onClick={() => navigate("/login")}>
						Login
					</Button>
				}
			/>
		</div>
	);
};

export default NotAuthorized;
