import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";

const SubscriptionField = () => {
	return (
		<form className="w-full max-w-[369px] min-[992px]:max-w-[525px]">
			<Input type="email" name="email" id="newsletter" placeholder="Masukkan Emailmu" autoComplete="email" />
			<Button
				type="button"
				id="subscribe"
				text="Subscribe"
				style="h-[40px] inline-block btn-large-screen p-[10px_5px] min-[576px]:p-[10px_8px] bg-[#ffbd3a] hover:bg-[#e0a126] border-none"
				textStyle="font-bold font-button leading-none text-white"
			/>
		</form>
	);
};

export default SubscriptionField;
