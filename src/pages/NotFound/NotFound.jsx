import { Button, Result } from "antd";
import { useNavigate } from "react-router";

const NotFound = () => {
	const navigate = useNavigate();

	return (
        <div className="flex justify-center items-center h-screen">
            <Result
                status="404"
                title="404"
                subTitle="Ups... Halaman yang Anda cari tidak ditemukan :("
                extra={
                    <Button type="primary" variant="solid" color="cyan" onClick={() => navigate("/")}>
                        Kembali ke Beranda
                    </Button>
                }
            />
        </div>
	);
};

export default NotFound;
