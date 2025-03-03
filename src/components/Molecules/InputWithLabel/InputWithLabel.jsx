import { useState } from "react";

import Input from "@components/Atoms/Input/Input";
import CountryCodeBox from "@components/Molecules/CountryCodeBox/CountryCodeBox";
import PropTypes from "prop-types";

const setReturnComponent = (type, name, id, props) => {
	switch (id) {
		case "gender":
			return (
				<Input name={name} id={id} value={props.selected} {...props}>
					<option value="" disabled>
						Pilih jenis kelamin
					</option>
					<option value="men">Laki-laki</option>
					<option value="women">Perempuan</option>
				</Input>
			);
		case "phone":
			return (
				<div className="grid grid-cols-[0.25fr_1fr] max-[576px]:grid-cols-[1fr_1fr] gap-x-3">
					<CountryCodeBox type={type} name={name} id={id} {...props}>
						<Input name="countryCode" id="countryCode" defaultValue="indonesia" {...props}>
							<option value="indonesia" disabled>
								+62
							</option>
						</Input>
					</CountryCodeBox>
				</div>
			);
		default:
			return <Input type={type} name={name} id={id} {...props} />;
	}
};

const InputWithLabel = ({ label, type, name, id, icon, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => {
		setShowPassword((prev) => !prev);
	};

	return icon ? (
		<div className="relative">
			<label htmlFor={id} className="text-[1em] max-[576px]:text-[0.875em]">
				{label}
			</label>
			<span className="text-[#b72315] text-[1.125em] max-[576px]:text-[1em] ml-[3px]">*</span>
			<Input
				type={type === "password" ? (showPassword ? "text" : "password") : type}
				name={name}
				id={id}
				{...props}
			/>
			<img
				src={icon}
				alt="Show Password"
				className="absolute w-4.5 h-4.5 top-[55%] right-2.5 cursor-pointer"
				onClick={handleClickShowPassword}
			/>
		</div>
	) : (
		<div className="relative">
			<label htmlFor={id} className="text-[1em] max-[576px]:text-[0.875em]">
				{label}
			</label>
			<span className="text-[#b72315] text-[1.125em] max-[576px]:text-[1em] ml-[3px]">*</span>
			{setReturnComponent(type, name, id, props)}
		</div>
	);
};

InputWithLabel.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	icon: PropTypes.string,
	onChange: PropTypes.func,
	onClick: PropTypes.func,
	state: PropTypes.object
};

export default InputWithLabel;
