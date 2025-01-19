import Button from "@components/Atoms/Button/Button";
import Input from "@components/Atoms/Input/Input";
import styles from "./SubscriptionField.module.css";

const SubscriptionField = () => {
    return (
        <form className={styles.subscriptionField}>
            <Input type="email" name="email" id="newsletter" placeholder="Masukkan Emailmu" />
            <Button type="submit" id="subscribe" text="Subscribe" />
        </form>
    )
};

export default SubscriptionField;