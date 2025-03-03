import PropTypes from "prop-types";

import storeUser from "@store/storeUser";
import Button from "@components/Atoms/Button/Button";
import CourseFeatures from "@components/Molecules/CourseFeatures/CourseFeatures";

const PurchasingPanel = ({ course }) => {
	const isLoggedIn = storeUser((state) => state.isLoggedIn);

	return (
		<aside className="w-full h-fit flex flex-col gap-y-4 p-5 border border-solid border-[#3A35411F] rounded-[10px] order-1 min-[992px]:max-w-[320px] min-[992px]:p-6 min-[992px]:order-2">
			<div className="flex flex-col gap-y-3">
				<h6 className="font-poppins font-semibold text-[1.125em]/[21.6px] text-black tracking-normal">
					{course.courseInfo.tagline}
				</h6>
				<div className={`w-full ${course.isDiscount ? "flex justify-between items-center" : "block"}`}>
					<div className="w-[150px] flex justify-between items-center">
						{course.isDiscount && (
							<h6 className="font-poppins font-semibold text-[1.125em]/[21.6px] text-[#3ecf4c] tracking-normal">
								Rp {course.discountedPrice}K
							</h6>
						)}
						<p
							className={`${
								course.isDiscount
									? "text-base/[22.4px] font-medium tracking-[0.0125em] line-through"
									: "font-poppins font-semibold text-[1.125em]/[21.6px] text-[#3ecf4c] tracking-normal"
							}`}>
							Rp {course.price}K
						</p>
					</div>
					{course.isDiscount && (
						<div className="p-[4px_10px] bg-[#FFBD3A] rounded-[10px] w-[85px] h-full">
							<p className="text-white text-center font-normal text-[0.75em]/[16.8px] tracking-[0.0125em]">
								Diskon {course.totalDiscount}%
							</p>
						</div>
					)}
				</div>
				{course.isDiscount && (
					<p className="text-[0.875em]/[19.6px] tracking-[0.0125em] text-[#0980E2] font-medium">
						Penawaran spesial tersisa 2 hari lagi!
					</p>
				)}
			</div>
			<div className="flex flex-col gap-y-4">
				<Button type="button" id="purchase" text="Beli Sekarang" grouped={true} />
				{!isLoggedIn && <Button type="button" style="outline" id="share" text="Bagikan Kelas" grouped={true} />}
			</div>
			<CourseFeatures course={course} />
		</aside>
	);
};

PurchasingPanel.propTypes = {
	course: PropTypes.object.isRequired
};

export default PurchasingPanel;
