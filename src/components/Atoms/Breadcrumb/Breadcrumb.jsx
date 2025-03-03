import PropTypes from "prop-types";

const Breadcrumb = ({ category, title }) => {
	return (
		<nav className="flex flex-wrap items-center gap-1 p-1">
			<a
				href="/"
				className="inline-flex items-center gap-1.5 text-base/[22.4px] font-normal tracking-[0.0125em] text-[#3A3541] opacity-68">
				Beranda
			</a>
			<span className="inline-block mx-1 text-base/[24px] text-[#3A3541] opacity-68 pointer-events-none select-none">
				/
			</span>
			<p
				href="#"
				className="inline-flex items-center gap-1.5 text-base/[22.4px] font-normal tracking-[0.0125em] text-[#3A3541] opacity-68">
				{category}
			</p>
			<span className="inline-block mx-1 text-base/[24px] text-[#3A3541] opacity-68 pointer-events-none select-none">
				/
			</span>
			<p className="inline-flex items-center gap-1.5 text-base/[22.4px] font-normal tracking-[0.0125em] text-[#222325]">
				{title}
			</p>
		</nav>
	);
};

Breadcrumb.propTypes = {
	category: PropTypes.string,
	title: PropTypes.string
};

export default Breadcrumb;
