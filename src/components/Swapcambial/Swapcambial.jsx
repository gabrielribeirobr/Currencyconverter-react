import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";



export default function Swapcambial({ selectedCurrency, destinationCurrency, handleSwap, handleChange, selectedCurrencyData }) {
  const currencies = useKeyCurrency();

  
  return (
    <div className={styles.swapBox}>
      <div className={styles.currencySwap} value={selectedCurrencyData?.rate}>
        {selectedCurrency}
      </div>

      <button onClick={handleSwap} className={styles.btnSwap}><i class="fa-solid fa-arrow-right-arrow-left"></i></button>

      <div className={styles.currencySwap}>
        <select
          className={styles.countryCurrency}
          value={destinationCurrency}
          onChange={handleChange}
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.code}> 
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}


