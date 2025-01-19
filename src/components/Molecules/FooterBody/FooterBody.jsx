import Accordion from "@components/Atoms/Accordion/Accordion";
import CompanyProfile from "@components/Atoms/CompanyProfile/CompanyProfile";
import PropTypes from "prop-types";
import styles from "./FooterBody.module.css";

const accordionItems = [
	{
		title: "Kategori",
		itemList: ["Digital Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"]
	},
	{
		title: "Perusahaan",
		itemList: ["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"]
	},
	{
		title: "Komunitas",
		itemList: ["Tips Sukses", "Blog"]
	}
];

const FooterBody = ({ companyInfo }) => {
	return (
		<div className={styles.footerBody}>
			<CompanyProfile companyInfo={companyInfo} />
			{accordionItems.map((item, index) => (
				<Accordion key={index} title={item.title} itemList={item.itemList} />
			))}
		</div>
	);
};

FooterBody.propTypes = {
    companyInfo: PropTypes.object.isRequired
};

export default FooterBody;
