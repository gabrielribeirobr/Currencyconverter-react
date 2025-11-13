import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";

export default function Swapcambial({ selectedCurrency }) {
  const currencies = useKeyCurrency();
  return (
    <div className={styles.swapBox}>
      <div className={styles.selectedCurrency}>{selectedCurrency}</div>
      
      <div className={styles.desiredCurrency}><select className={styles.countryCurrency}>{currencies.map((currency =>(
            <option key={currency.code} value={currency.rate}>
              {currency.code}
            </option>
          )))}</select></div>
    </div>
  );
}
