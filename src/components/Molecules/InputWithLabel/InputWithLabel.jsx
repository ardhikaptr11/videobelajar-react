import Input from "@components/Atoms/Input/Input";
import CountryCodeBox from "@components/Molecules/CountryCodeBox/CountryCodeBox";
import PropTypes from "prop-types";
import styles from "./InputWithLabel.module.css";

const setReturnComponent = (type, name, id, props) => {
	switch (id) {
		case "gender":
			return (
				<Input name={name} id={id} {...props} defaultValue="">
					<option value="" disabled>
						Pilih jenis kelamin
					</option>
					<option value="men">Laki-laki</option>
					<option value="women">Perempuan</option>
				</Input>
			);
		case "phone":
			return (
				<div className={styles.phoneField}>
					<CountryCodeBox type={type} name={name} id={id} {...props}>
						<Input name="countryCode" id="countryCode" defaultValue="indonesia">
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
	return icon ? (
		<div className={styles.formInput}>
			<label htmlFor={id}>{label}</label>
			<Input type={type} name={name} id={id} {...props} />
			<img src={icon} alt="Show Password" className={styles.hidePassword} />
		</div>
	) : (
		<div className={styles.formInput}>
			<label htmlFor={id}>{label}</label>
			{setReturnComponent(type, name, id, props)}
		</div>
	);
};

InputWithLabel.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	icon: PropTypes.string
};

export default InputWithLabel;

// {id === "gender" ? (
// 	<Input name={name} id={id} {...props} defaultValue="">
// 		<option value="" disabled>
// 			Pilih jenis kelamin
// 		</option>
// 		<option value="men">Laki-laki</option>
// 		<option value="women">Perempuan</option>
// 	</Input>
// ) : (
// 	<Input type={type} name={name} id={id} {...props} />
// )}
