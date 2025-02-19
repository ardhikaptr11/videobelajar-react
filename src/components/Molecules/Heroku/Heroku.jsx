import Button from "@components/Atoms/Button/Button";
import PropTypes from "prop-types";

const Heroku = ({ tagline, description }) => {
	return (
		<section className="h-[400px] flex flex-col justify-center items-center text-[#ffffff] text-center py-[37px] px-5 rounded-[10px] bg-center bg-cover bg-no-repeat bg-(image:--heroku-bg) min-[1200px]:p-[60px_140px]">
			<h3 className="text-2xl/[26.4px] font-bold mb-3 min-[992px]:text-[1.75em] min-[1200px]:text-5xl/[52.8px]">
				{tagline}
			</h3>
			<p className="text-[0.875em]/[19.6px] font-normal mb-6 min-[992px]:text-base">{description}</p>
			<Button type="button" id="explore" text="Temukan Video Course untuk Dipelajari!" />
		</section>
	);
};

Heroku.propTypes = {
	tagline: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default Heroku;
