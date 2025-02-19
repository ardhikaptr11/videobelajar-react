import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";

const SubscriptionField = () => {
	return (
		<form className="w-full max-w-[369px] min-[992px]:max-w-[525px]">
			<Input type="email" name="email" id="newsletter" placeholder="Masukkan Emailmu" />
			<Button type="submit" id="subscribe" text="Subscribe" />
		</form>
	);
};

export default SubscriptionField;
