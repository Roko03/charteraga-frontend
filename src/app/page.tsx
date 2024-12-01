import Footer from "@/components/Footer";
import styles from "./page.module.scss";
import PaymentMethodCard from "@/components/PaymentMethodCard";

export default function Home() {
  return (
    <div className={styles.page}>
      <PaymentMethodCard payment={"second"} />
    </div>
  );
}
