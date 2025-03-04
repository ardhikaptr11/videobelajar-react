import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

import Button from "@components/Atoms/Button/Button";

const Heroku = ({ position = "front-page", ...props }) => {
	const handleClicked = () => {
		const section = document.querySelector("#courses");
		section.scrollIntoView({ behavior: "smooth" });
	};

	// TODO
	return position === "front-page" ? (
		<section className="h-[400px] flex flex-col justify-center items-center text-[#ffffff] text-center py-[37px] px-5 rounded-[10px] bg-center bg-cover bg-no-repeat bg-(image:--heroku-bg) min-[1200px]:p-[60px_140px]">
			<h3 className="text-2xl/[26.4px] font-bold mb-3 min-[992px]:text-[1.75em] min-[1200px]:text-5xl/[52.8px]">
				{props.tagline}
			</h3>
			<p className="text-[0.875em]/[19.6px] font-normal mb-6 min-[992px]:text-base">{props.description}</p>
			<Button
				type="button"
				id="explore"
				text="Temukan Video Course untuk Dipelajari!"
				style="w-full h-[42px] max-w-[369px] p-[10px_5px] min-[576px]:p-[10px_8px] bg-[#3ecf4c] hover:bg-[#36b343] border-none"
				textStyle="font-normal font-button text-[0.875em] leading-none text-white max-[345px]:text-[0.75em]"
				onClick={handleClicked}
			/>
		</section>
	) : (
		<section
			className="h-[400px] flex flex-col gap-y-6 justify-center text-[#ffffff] p-[58px_20px] rounded-[10px] bg-center bg-cover bg-no-repeat mt-6 min-[1200px]:mt-9 min-[1200px]:p-[113px_260px_143px_100px]"
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${props.course.coverImage})`
			}}>
			<div className="flex flex-col gap-y-3">
				<h2 className="w-fit text-2xl/[33.6px] min-[1200px]:text-[2.5em]/[44px] font-semibold font-poppins letter-normal">
					{props.course.courseInfo.tagline}
				</h2>
				<div className="w-fit">
					<p className="w-fit text-[0.875em]/[19.6px] font-medium letter-[0.0125em] min-[992px]:text-base/[22.4px]">
						Belajar bersama tutor profesional di Videobelajar.
					</p>
					<p className="w-fit text-[0.875em]/[19.6px] font-medium letter-[0.0125em] min-[992px]:text-base/[22.4px]">
						Kapanpun, di manapun.
					</p>
				</div>
			</div>
			<div className="w-fit flex gap-x-2 items-center">
				<Rating
					initialValue={props.course.rating}
					allowFraction={true}
					readonly={true}
					size={24}
					style={{ height: "30px" }}
					fillColor="#FCE91B"
				/>
				<p className="text-[0.75em]/[16.8px] font-medium tracking-normal min-[768px]:text-[0.875em]/[19.6px]">
					<u>
						{props.course.rating} ({props.course.totalReviews})
					</u>
				</p>
			</div>
		</section>
	);
};

Heroku.propTypes = {
	coverImage: PropTypes.string,
	tagline: PropTypes.string,
	description: PropTypes.string,
	course: PropTypes.object,
	position: PropTypes.string
};

export default Heroku;
