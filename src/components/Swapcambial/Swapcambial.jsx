import styles from "./Swapcambial.module.css";
import { useKeyCurrency } from "../Boxvalue/Boxvalue";
import { useState } from "react";

export default function Swapcambial({ selectedCurrency, destinationCurrency, amount, handleChange, selectedCurrencyData }) {
  const currencies = useKeyCurrency();

  
  return (
    <div className={styles.swapBox}>
      <div className={styles.currencySwap} value={selectedCurrencyData?.rate}>
        {selectedCurrency}
      </div>

      <button>swap</button>

      <div className={styles.currencySwap}>
        <select
          className={styles.countryCurrency}
          value={destinationCurrency}
          onChange={handleChange}
        >
          {currencies.map(currency => (
            <option key={currency.code} value={currency.rate}> 
              {currency.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}


