import PropTypes from "prop-types";
import { Rating } from "react-simple-star-rating";

const Card = ({ data, role }) => {
	return (
		<div className="flex flex-col gap-y-3 p-4 border border-solid border-[#3A35411F] rounded-[10px] min-[992px]:p-5">
			<div className="w-fit flex gap-x-2.5 items-center">
				<img src={data.avatar} className="size-10" />
				<div className="flex flex-col">
					<h3 className="font-medium text-base/[22.4px] text-[#222325] tracking-[0.0125em]">{data.name}</h3>
					<p className="text-[0.875em]/[19.6px] font-normal tracking-[0.0125em]">
						{role === "instructor" ? (
							<>
								{data.job} di <b>{data.company}</b>
							</>
						) : (
							<>Alumni {data.batch}</>
						)}
					</p>
				</div>
			</div>
			<p className="text-[0.875em]/[19.6px] font-normal tracking-[0.0125em] text-[#222325]">
				{role === "instructor" ? <>{data.careerBackground}</> : <>{data.givenReview}</>}
			</p>
			{role === "alumni" && (
				<div className="flex items-center gap-x-2">
					<Rating
						initialValue={data.givenRating}
						allowFraction={true}
						readonly={true}
						style={{ height: "30px" }}
						size={18}
						fillColor="#FCE91B"
					/>
					<p className="text-[0.875em]/[19.6px] font-normal tracking-[0.0125em]">
						{data.givenRating}
					</p>
				</div>
			)}
		</div>
	);
};

export default Card;

Card.propTypes = {
	data: PropTypes.object.isRequired,
	role: PropTypes.string.isRequired
};
