import PropTypes from "prop-types";
import styles from "./CategoriesTab.module.css";

const CategoriesTab = ({ categories }) => {
	return (
		<div className={styles.categoriesTab}>
			{categories.map((category, index) => {
				return (
					<a key={index} href="#" className={styles.category}>
						{category}
					</a>
				);
			})}
		</div>
	);
};

CategoriesTab.propTypes = {
	categories: PropTypes.array.isRequired
};

export default CategoriesTab;
