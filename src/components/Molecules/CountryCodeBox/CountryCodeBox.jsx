import indonesianFlag from "@assets/indonesian-flag.png";
import PropTypes from "prop-types";

const CountryCodeBox = ({ type, name, id, children, ...props }) => {
	return (
		<>
			<div className="flex items-center">
				<div className="relative h-full flex items-center bg-[#f4f5fa] p-[5px] border-1 border-solid border-[#3a354166] rounded-s-[6px] border-r-0">
					<img src={indonesianFlag} alt="Country Flag" className="aspect-auto" />
				</div>
				{children}
			</div>
			<input
				type={type}
				name={name}
				className="w-full block appearance-none h-[36px] border-1 border-solid border-[#3a354166] rounded-[6px] text-base p-[4px_10px]"
				id={id}
				{...props}
			/>
		</>
	);
};

CountryCodeBox.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default CountryCodeBox;
