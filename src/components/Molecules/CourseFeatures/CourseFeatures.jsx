import PropTypes from "prop-types";

import bookIcon from "@assets/book-icon.png";
import fileCheckIcon from "@assets/file-check.png";
import fileEditIcon from "@assets/file-edit.png";
import videoIcon from "@assets/video-icon.png";
import worldIcon from "@assets/world-icon.png";
import certificateIcon from "@assets/file-certificate.png";

const CourseFeatures = ({ course }) => {
	const courseDetails = course.courseInfo.courseDetails;

	const keys = Object.keys(courseDetails);
	const dynamicDivs = keys.map((key) => {
		const item = courseDetails[key];

		switch (key) {
			case "totalDocument":
				return (
					<div
						key={key}
						className="flex items-center gap-x-2 w-[130px] flex-(--flex-feat) max-w-(--max-w-feat)">
						<img src={bookIcon} alt="Total Document" />
						<div className="flex gap-x-1 max-[340px]:flex-col max-[340px]:items-center">
							<p className="font-poppins text-[0.875em]/[21px] font-medium">{item}</p>
							<p className="font-poppins text-[0.875em]/[21px] font-medium">Dokumen</p>
						</div>
					</div>
				);
			case "totalVideo":
				return (
					<div
						key={key}
						className="flex items-center gap-x-2 w-[130px] flex-(--flex-feat) max-w-(--max-w-feat)">
						<img src={videoIcon} alt="Total Video" />
						<p className="font-poppins text-[0.875em]/[21px] font-medium">{item} Video</p>
					</div>
				);
			case "hasCertificate":
				return (
					item && (
						<div
							key={key}
							className="flex items-center gap-x-2 w-[130px] flex-(--flex-feat) max-w-(--max-w-feat)">
							<img src={certificateIcon} alt="Certicate Available" />
							<p className="font-poppins text-[0.875em]/[21px] font-medium">Sertifikat</p>
						</div>
					)
				);
			default:
				return null;
		}
	});

	return (
		<div className="flex flex-col gap-y-5">
			<div className="w-full flex flex-col min-[992px]:max-w-[290px] gap-y-3">
				<h4 className="font-poppins text-[0.875em]/[21px] font-semibold text-black">
					Course Ini Sudah Termasuk
				</h4>
				<div className="flex flex-wrap justify-between gap-4">
					<div className="flex items-center gap-x-2 w-[130px] flex-(--flex-feat) max-w-(--max-w-feat)">
						<img src={fileCheckIcon} alt="Final Exam" />
						<div className="flex gap-x-1 max-[340px]:flex-col max-[340px]:items-center">
							<p className="font-poppins text-[0.875em]/[21px] font-medium">Ujian</p>
							<p className="font-poppins text-[0.875em]/[21px] font-medium">Akhir</p>
						</div>
					</div>
					{dynamicDivs}
					<div className="flex items-center gap-x-2 w-[130px] flex-(--flex-feat) max-w-(--max-w-feat)">
						<img src={fileEditIcon} alt="Pretest" />
						<p className="font-poppins text-[0.875em]/[21px] font-medium">Pretest</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-3">
				<h4 className="font-poppins text-[0.875em]/[21px] font-semibold text-black">Bahasa Pengantar</h4>
				<div className="flex items-center gap-x-4">
					<img src={worldIcon} alt="Language Used" />
					<p className="font-poppins text-[0.875em]/[21px] font-medium">
						{Array.isArray(courseDetails.featuredLanguage)
							? courseDetails.featuredLanguage.join(", ")
							: courseDetails.featuredLanguage}
					</p>
				</div>
			</div>
		</div>
	);
};

CourseFeatures.propTypes = {
	course: PropTypes.object.isRequired
};

export default CourseFeatures;
