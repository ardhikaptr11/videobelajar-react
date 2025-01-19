import PropTypes from "prop-types";
import style from "./AuthBox.module.css";

const AuthBox = ({ title, subtitle, action, children }) => {
	return (
		<section className={`${style.authBox} ${action === "register" ? style.register : style.login}`}>
			<div className={style.headingText}>
				<h2>{title}</h2>
				<p>{subtitle}</p>
			</div>
			{children}
		</section>
	);
};

AuthBox.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	action: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default AuthBox;
