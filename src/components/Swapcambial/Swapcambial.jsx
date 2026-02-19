import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";



export default function Swapcambial({ selectedCurrency, destinationCurrency, handleSwap, onDestinationChange, selectedCurrencyData }) {
  const currencies = useKeyCurrency();

  
  return (
    <div className={styles.swapBox}>
  <div className={styles.currencyCard}>{selectedCurrency}</div>

  <button className={styles.swapButton} onClick={handleSwap}>
    <i className="fa-solid fa-arrow-right-arrow-left"></i>
  </button>

  <div className={styles.currencyCard}>
    <select value={destinationCurrency} onChange={onDestinationChange}>
      {currencies.map(c => (
        <option key={c.code} value={c.code}>{c.code}</option>
      ))}
    </select>
  </div>
</div>

  );
}


