import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchingTools = ({ value, onChange }) => {
	return (
		<div className="w-full flex justify-between order-1 h-[48px] p-[12px] pl-[17px] border border-solid border-[#3a35411f] rounded-[10px] min-[576px]:max-w-[220px] min-[576px]:order-2">
			<input
				type="text"
				name="search"
				id="search"
				value={value}
				placeholder="Cari Kelas"
				className="focus:outline-none"
				autoComplete="off"
				onChange={onChange}
			/>
			<span>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</span>
		</div>
	);
};

SearchingTools.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};

export default SearchingTools;
