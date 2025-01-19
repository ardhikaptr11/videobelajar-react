import styles from "./Accordion.module.css";
import PropTypes from "prop-types";
import chevronForward from "@assets/chevron-forward.png";

const Accordion = ({ title, itemList }) => {
	return (
		<div className={styles.accordion}>
			<p className={styles.title}>{title}</p>
			<img src={chevronForward} alt="Navigation" className={styles.chevronForward} />
			<ul className={styles.itemList}>
				{itemList.map((item, index) => (
					<li key={index} className={styles.item}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

Accordion.propTypes = {
	title: PropTypes.string.isRequired,
	itemList: PropTypes.array.isRequired
};

export default Accordion;
